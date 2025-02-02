// src/Layout.js
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; // Om du vill ha separat CSS

function Layout() {
  return (
    <div className="layout">
      <header className="site-header">
        <img src="vasteras stad_logotyp.png" alt="Logotyp" className="logo" />
        <nav>
          <Link to="/">Hem</Link>
          <Link to="/processer">Processer</Link>
          <Link to="/material">Material</Link>
        </nav>
      </header>
      <main className="content">
        {/* Här renderas sidans innehåll */}
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>&copy; 2025 Västeras stad</p>
      </footer>
    </div>
  );
}

export default Layout;
