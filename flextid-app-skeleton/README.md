# Flextidsapp – Grundläggande kodbas

Detta är ett **fullstack‑skelett** (React + Express + SQLite) som implementerar de viktigaste funktionerna
för en flextidsapplikation:

* **Roller:** medarbetare, chef, administratör  
* **Autentisering:** JWT + bcrypt (lösenords‑reset är endast stub)  
* **Flextidslogik:** beräknar arbetad tid, dagens flex och saldo  
* **Behörighetsstyrning:** chefer ser sina medarbetare, admin ser allt  

## Kom igång lokalt

```bash
# Klona repo och gå till backend
cd backend
npm install
# Skapa första admin‑konto
node -e "fetch('http://localhost:3001')"
# Starta server
npm run dev
```

I nytt terminalfönster:

```bash
cd ../frontend
npm install
npm run dev
```

Frontend körs på <http://localhost:5173> och backend på port **3001**.

## Nästa steg

* Implementera riktig e‑postbaserad lösenordsåterställning  
* Flytta databas till t.ex. Supabase eller Postgres  
* Lägg till mobil‑ikon och `manifest.json` för att göra appen till PWA  
* Förbättra UI med Tailwindkomponenter  
* Skapa CI/CD‑workflow för Netlify/Vercel + Railway/Render  

Lycka till!  
