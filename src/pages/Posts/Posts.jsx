import axios from "axios";
import { useEffect, useState } from "react";
import AppCard from "./AppCard";

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