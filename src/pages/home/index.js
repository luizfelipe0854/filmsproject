import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import "../../responsive.css"

import api from "../../services/api";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/upcoming", {
        params: {
          api_key: "9158248058702e442b86003f222df955",
          language: "pt-BR",
          pages: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 10));
    }
    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((item) => (
          <article key={item.id}>
            <h1>{item.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title}
            />
            <Link to={`/filme/${item.id}`}>Ver</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
