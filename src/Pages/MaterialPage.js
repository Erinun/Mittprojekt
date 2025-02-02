import { Link } from 'react-router-dom';
import './Materialpage.css';

function MaterialPage() {
  // Exempeldatastruktur för arbetsgrupper (byt ut sökvägarna mot dina faktiska bildvägar)
  const groups = [
    { id: 1, image: 'https://www.google.se/search?sca_esv=0fa2b56a897e35ff&sxsrf=AHTn8zpWPtVSemlF1RGX2zc9pBXita7jMw:1738456159189&q=v%C3%A4ster%C3%A5s+kommun+%27&udm=2&source=iu&ictx=1&vet=1&sa=X&ved=2ahUKEwi-ws3u3aOLAxUdlP0HHQkdJ5IQgbgHegQIKBAC&biw=1528&bih=738&dpr=1.25#vhid=7QCX7qFuJ7P9MM&vssid=mosaic', name: 'Paket gruppen,' },
    { id: 2, image: 'https://www.google.se/search?sca_esv=0fa2b56a897e35ff&sxsrf=AHTn8zpWPtVSemlF1RGX2zc9pBXita7jMw:1738456159189&q=v%C3%A4ster%C3%A5s+kommun+%27&udm=2&source=iu&ictx=1&vet=1&sa=X&ved=2ahUKEwi-ws3u3aOLAxUdlP0HHQkdJ5IQgbgHegQIKBAC&biw=1528&bih=738&dpr=1.25#vhid=7QCX7qFuJ7P9MM&vssid=mosaic', name: 'Chefs gruppen' },
    { id: 3, image: 'https://www.google.se/search?sca_esv=0fa2b56a897e35ff&sxsrf=AHTn8zpWPtVSemlF1RGX2zc9pBXita7jMw:1738456159189&q=v%C3%A4ster%C3%A5s+kommun+%27&udm=2&source=iu&ictx=1&vet=1&sa=X&ved=2ahUKEwi-ws3u3aOLAxUdlP0HHQkdJ5IQgbgHegQIKBAC&biw=1528&bih=738&dpr=1.25#vhid=7QCX7qFuJ7P9MM&vssid=mosaic', name: 'Grunden' },
    { id: 4, image: 'https://www.google.se/search?sca_esv=0fa2b56a897e35ff&sxsrf=AHTn8zpWPtVSemlF1RGX2zc9pBXita7jMw:1738456159189&q=v%C3%A4ster%C3%A5s+kommun+%27&udm=2&source=iu&ictx=1&vet=1&sa=X&ved=2ahUKEwi-ws3u3aOLAxUdlP0HHQkdJ5IQgbgHegQIKBAC&biw=1528&bih=738&dpr=1.25#vhid=7QCX7qFuJ7P9MM&vssid=mosaic', name: 'Samrek skola' },
    { id: 5, image: 'https://www.google.se/search?sca_esv=0fa2b56a897e35ff&sxsrf=AHTn8zpWPtVSemlF1RGX2zc9pBXita7jMw:1738456159189&q=v%C3%A4ster%C3%A5s+kommun+%27&udm=2&source=iu&ictx=1&vet=1&sa=X&ved=2ahUKEwi-ws3u3aOLAxUdlP0HHQkdJ5IQgbgHegQIKBAC&biw=1528&bih=738&dpr=1.25#vhid=7QCX7qFuJ7P9MM&vssid=mosaic', name: 'Samrek förskola' },
    { id: 6, image: 'https://www.google.se/search?sca_esv=0fa2b56a897e35ff&sxsrf=AHTn8zpWPtVSemlF1RGX2zc9pBXita7jMw:1738456159189&q=v%C3%A4ster%C3%A5s+kommun+%27&udm=2&source=iu&ictx=1&vet=1&sa=X&ved=2ahUKEwi-ws3u3aOLAxUdlP0HHQkdJ5IQgbgHegQIKBAC&biw=1528&bih=738&dpr=1.25#vhid=7QCX7qFuJ7P9MM&vssid=mosaic', name: 'Employer branding' },
  ];

  return (
    <div className="material-page">
      {/* Header med Tillbaka-knapp */}
      <header className="page-header">
        <Link to="/" className="back-button">Tillbaka</Link>
      </header>

      <h1>Välkommen, här hittar du följande information</h1>
      
      <section className="groups-section">
        <h2>Arbetsgrupper</h2>
        <p>Här hittar du information om vilka som arbetar i respektive process.</p>
        <div className="groups-container">
          {groups.map((group) => (
            <div key={group.id} className="group-card">
              <img src={group.image} alt={group.name} />
              <p>{group.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-section">
        <h2>Resurser</h2>
        <ul>
          <li><a href="/mallar">Mallar</a></li>
          <li><a href="/rutiner">Rutiner</a></li>
          <li><a href="/policy">Policy</a></li>
          <li><a href="/lathundar">Lathundar</a></li>
        </ul>
      </section>
    </div>
  );
}

export default MaterialPage;
