import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

const db = new sqlite3.Database('./flex.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    role TEXT CHECK (role IN ('employee','manager','admin')),
    unit TEXT,
    manager_id INTEGER,
    email TEXT UNIQUE,
    password_hash TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    date TEXT,
    start TEXT,
    lunch_start TEXT,
    lunch_end TEXT,
    end TEXT,
    hours_worked REAL,
    flex REAL,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
});

const app = express();
app.use(cors());
app.use(express.json());

// helper
function generateToken(user){ return jwt.sign({id:user.id,role:user.role}, JWT_SECRET, {expiresIn:'7d'}); }

function auth(requiredRole=null){
  return (req,res,next)=>{
    const auth = req.headers.authorization;
    if(!auth) return res.status(401).json({error:'No token'});
    try{
      const token = auth.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      if(requiredRole && decoded.role!==requiredRole && decoded.role!=='admin'){
        return res.status(403).json({error:'Forbidden'});
      }
      next();
    }catch(e){ res.status(401).json({error:'Invalid token'}); }
  };
}

// Register (admin creates users)
app.post('/api/register', auth('admin'), async (req,res)=>{
  const {first_name,last_name,role,unit,manager_id,email,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  db.run(`INSERT INTO users(first_name,last_name,role,unit,manager_id,email,password_hash) VALUES(?,?,?,?,?,?,?)`,
    [first_name,last_name,role,unit,manager_id||null,email,hash],
    function(err){
      if(err) return res.status(400).json({error:err.message});
      res.json({id:this.lastID});
    });
});

// initial admin bootstrap
app.post('/api/bootstrap-admin', async(req,res)=>{
  const {email,password}=req.body;
  db.get(`SELECT id FROM users WHERE role='admin'`,(err,row)=>{
    if(row) return res.status(400).json({error:'Admin exists'});
    bcrypt.hash(password,10).then(hash=>{
      db.run(`INSERT INTO users(first_name,last_name,role,email,password_hash) VALUES('Admin','User','admin',?,?)`,
      [email,hash], function(err){
        if(err) return res.status(400).json({error:err.message});
        res.json({id:this.lastID});
      });
    });
  });
});

// Login
app.post('/api/login', (req,res)=>{
  const {email,password}=req.body;
  db.get(`SELECT * FROM users WHERE email=?`,[email], async (err,user)=>{
    if(err||!user) return res.status(400).json({error:'Bad credentials'});
    const ok = await bcrypt.compare(password, user.password_hash);
    if(!ok) return res.status(400).json({error:'Bad credentials'});
    const token = generateToken(user);
    res.json({token, role:user.role, id:user.id});
  });
});

// Password reset stub
app.post('/api/reset-password', (req,res)=>{
  // In production, send email with reset link
  res.json({message:'Password reset flow is not implemented in this skeleton.'});
});

// Create entry
app.post('/api/entries', auth(), (req,res)=>{
  const {date,start,lunch_start,lunch_end,end}=req.body;
  const startDate = new Date(`1970-01-01T${start}:00`);
  const lunchStartDate = new Date(`1970-01-01T${lunch_start}:00`);
  const lunchEndDate = new Date(`1970-01-01T${lunch_end}:00`);
  const endDate = new Date(`1970-01-01T${end}:00`);
  const msWorked = (lunchStartDate - startDate) + (endDate - lunchEndDate);
  const hours = msWorked/3600000;
  const flex = hours - 8;
  db.run(`INSERT INTO entries(user_id,date,start,lunch_start,lunch_end,end,hours_worked,flex) VALUES(?,?,?,?,?,?,?,?)`,
    [req.user.id,date,start,lunch_start,lunch_end,end,hours,flex],
    function(err){ if(err) return res.status(400).json({error:err.message}); res.json({id:this.lastID}); });
});

// Get own entries
app.get('/api/entries', auth(), (req,res)=>{
  db.all(`SELECT * FROM entries WHERE user_id=? ORDER BY date`,[req.user.id],(err,rows)=>{
    if(err) return res.status(400).json({error:err.message});
    res.json(rows);
  });
});

// Manager get subordinates
app.get('/api/subordinates', auth('manager'), (req,res)=>{
  db.all(`SELECT * FROM users WHERE manager_id=?`,[req.user.id],(err,users)=>{
    if(err) return res.status(400).json({error:err.message});
    const ids = users.map(u=>u.id);
    if(ids.length===0) return res.json([]);
    const placeholders = ids.map(()=>'?').join(',');
    db.all(`SELECT * FROM entries WHERE user_id IN (${placeholders})`,ids,(err,entries)=>{
      if(err) return res.status(400).json({error:err.message});
      res.json({users,entries});
    });
  });
});

// Admin list users
app.get('/api/users', auth('admin'), (req,res)=>{
  db.all(`SELECT * FROM users`,(err,rows)=>{
    if(err) return res.status(400).json({error:err.message});
    res.json(rows);
  });
});

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
