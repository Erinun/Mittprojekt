import { Link } from 'react-router-dom';
import './Landingpage.css';

function LandingPage() {
  return (
    <div>
      <h1>Välkommen till rekryteringsenhetens digitala hemsida</h1>
      <p>Här hittar du information om våra rekryteringsprocesser, mallar, rutiner, policy och lathundar.</p>
      <nav>
        <Link to="/processer">
          <button className="sub-step-button">Rekryteringsprocesser</button>
        </Link>
        <Link to="/material">
          <button className="sub-step-button">Arbetsgrupper & Material</button>
        </Link>
      </nav>
    </div>
  );
}

export default LandingPage;
