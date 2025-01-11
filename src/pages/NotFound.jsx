import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 className="mb-3">Pagina non trovata! Errore 404"</h1>
      <Link to="/">Home</Link> <span>
        <Link to="/posts">
          Torna alla lista degli articoli
        </Link>
      </span>
    </div>
  );
}

export default NotFound;