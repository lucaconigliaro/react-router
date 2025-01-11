import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function ShowPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${apiUrl}/posts/${id}`)
            .then((resp) => {
                setPost(resp.data);
            })
            .catch((err) => {
                if (err.response && err.response.status === 404) {
                    navigate("/not-found");e
                } else {
                    console.error("Errore durante il recupero del post:", err);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id, navigate]);

    return (
        <>
            {loading ? (
                <p>Caricamento...</p>
            ) : post ? (
                <div className="container my-3">
                    <div className="card small-card">
                        <img className="card-img-top" src={post.immagine} alt={post.titolo} />
                        <div className="card-body">
                            <h5>{post.titolo}</h5>
                            <p>{post.contenuto}</p>
                            <div className="mt-4">
                                <Link className="btn btn-danger m-3" to={`/posts/${parseInt(post.id) - 1}`}>
                                    Indietro <i className="fa-solid fa-arrow-left"></i>
                                </Link>
                                <Link className="btn btn-danger m-3" to={`/posts/${parseInt(post.id) + 1}`}>
                                    Avanti <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-3">
                            <Link to="/posts" className="btn btn-secondary">
                                Torna alla lista degli articoli
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Post non trovato.</p>
            )}
        </>
    );
}

export default ShowPost;
