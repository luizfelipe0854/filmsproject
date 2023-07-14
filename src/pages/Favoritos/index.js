import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


import "./favoritos.css";
import "../../responsive.css"

function Favoritos() {
    
    const [filmes, setFilmes] = useState([]);
    
    useEffect(() => {
        const meusFilmes = localStorage.getItem("@FilmesFavoritos");
        setFilmes(JSON.parse(meusFilmes) || []);
    }, []);
    
    function deleteFilme(id){
        let lista = filmes.filter((item)=>{
            return (item.id !== id)
        });
        setFilmes(lista);
        localStorage.setItem("@FilmesFavoritos", JSON.stringify(lista));
        toast.error("Filme apagado!");
    }

    
    return (
        <div className="filmes-favoritos">
            <h1>Meus Filmes</h1>

        {filmes.length === 0 && <span>Você não tem nenhum filme salvo 🙁</span>}
        <ul>
        
        {filmes.map((item) => {
            return (               
                <li key={item.id}>          
                    <span>{item.title}</span>
                    <div className="botoes-favoritos">
                        <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                        <button onClick={()=> {deleteFilme(item.id)}}>X</button>
                    </div>
                </li>  
                )
            })}
            </ul>
            </div>
            )
        }
        
        export default Favoritos;