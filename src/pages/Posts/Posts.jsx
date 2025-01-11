import axios from "axios";
import { useEffect, useState } from "react";
import AppCard from "../../components/AppCard";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;


function Posts() {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        axios.get(`${apiUrl}/posts`)
            .then((resp) => {
                setArticle(resp.data.data);
            })
    };

    const cancel = (idToDelete) => {
        axios.delete(`${apiUrl}/posts/${idToDelete}`)
            .then(() => {
                const newArray = article.filter((curArticle) => curArticle.id !== idToDelete);
                setArticle(newArray);
            })
    };

    return (
        <div className="container">
            <div className="my-3">
                <Link className="btn btn-light" to="/posts/create">
                    Aggiungi un nuovo Articolo
                </Link>
            </div>

            <section>
                <h2>Nuovi Articoli</h2>
                {article.length > 0 ? (
                    <div className="card-container">
                        {article.map((curArticle) => (
                            <div className="col" key={curArticle.id}>
                                <AppCard post={curArticle} onCancel={() => cancel(curArticle.id)} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Nessun articolo</p>
                )}
            </section>
        </div>
    );
}

export default Posts;