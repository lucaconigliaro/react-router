import { Link } from "react-router-dom";

function AppCard({ post, onCancel }) {

  return (
    <div className="card small-card">
      <img src={post.immagine} alt={post.titolo} className="card-img-top" />
      <div className="card-body">
        <h5>{post.titolo}</h5>
        <p>{post.contenuto}</p>
        <button onClick={onCancel} className="btn btn-danger">🗑️ Elimina</button>
        <Link className="btn btn-success" to={`/posts/${post.id}`}>
          Dettagli
        </Link>
      </div>
    </div>
  );
}

export default AppCard;