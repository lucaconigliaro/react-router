import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const initialFormData = {
    id: "",
    titolo: "",
    immagine: "",
    contenuto: "",
};

function CreatePost() {
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate(); // Hook per gestire la navigazione

    const handleArticleForm = (event) => {
        event.preventDefault();
        axios.post(`${apiUrl}/posts`, formData)
            .then((resp) => {
                const createdPost = resp.data;
                setFormData(initialFormData);
                navigate(`/posts/${createdPost.id}`); // Reindirizza alla pagina del nuovo post
            })
            .catch((err) => {
                console.error("Errore durante la creazione del post:", err);
            });
    };

    const handleInputChange = (event) => {
        const keyToChange = event.target.name;
        const newValue = event.target.value;

        const newData = {
            ...formData,
            [keyToChange]: newValue,
        };

        setFormData(newData);
    };

    return (
        <div className="container">
            <section>
                <h3>Aggiungi un nuovo articolo</h3>
                <form onSubmit={handleArticleForm}>
                    <div>
                        <label htmlFor="articleTitle">Nome dell'articolo</label>
                        <input
                            id="articleTitle"
                            type="text"
                            className="form-control mb-2"
                            placeholder="Inserisci il titolo dell'articolo"
                            name="titolo"
                            value={formData.titolo}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="articleImage">Immagine dell'articolo</label>
                        <input
                            id="articleImage"
                            type="text"
                            className="form-control mb-2"
                            placeholder="Inserisci l'immagine dell'articolo"
                            name="immagine"
                            value={formData.immagine}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="articleContent">Contenuto dell'articolo</label>
                        <textarea
                            id="articleContent"
                            className="form-control mb-2"
                            placeholder="Inserisci il contenuto dell'articolo"
                            name="contenuto"
                            value={formData.contenuto}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success mt-2"
                        disabled={!formData.titolo || !formData.contenuto}
                    >
                        Invia
                    </button>
                </form>
            </section>
        </div>
    );
}

export default CreatePost;
