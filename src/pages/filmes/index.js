import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import "./filme.css"
import api from "../../services/api";


function Filme() {
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function LoadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "9158248058702e442b86003f222df955",
                    language: "pt-BR",
                    pages: 1
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.error("FILME NÃO ENCONTRADO");
                    navigate("/", { replace: true });
                    setLoading(false);
                })
        }
        LoadFilme();
    }, [id, navigate]);



    function SaveFilme() {
        const listafavoritos = localStorage.getItem("@FilmesFavoritos");

        let FilmesFavoritos = JSON.parse(listafavoritos) || [];

        const temFilme = FilmesFavoritos.some((item) => item.id === filme.id);

        if (temFilme) {
            toast.warn("Este filme já está nos seus favoritos!");
            return;
        }
        FilmesFavoritos.push(filme);
        localStorage.setItem("@FilmesFavoritos", JSON.stringify(FilmesFavoritos));
        toast.success("Filme salvo! 😃")
    }

    if (loading) {
        return (
            <div className="carregando">
                <h1>Carregando informações do filme...</h1>
            </div>
        )
    }

    return (
        <div className="infos-filme">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <strong>Avaliação:{filme.vote_average.toFixed(1)}/10</strong>
            <h3>Sinopse:</h3>
            <p>{filme.overview}</p>
            <div className="button-area">
                <button onClick={SaveFilme}>Salvar</button>
                <button><a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title}+trailer`}>Trailer</a></button>
            </div>
        </div>
    )
}

export default Filme;