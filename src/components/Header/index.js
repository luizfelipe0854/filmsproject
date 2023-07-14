import { Link } from "react-router-dom";
import "./header.css"

function Header() {
    return (
        <header>
            <Link to="/"><h1>Filmes<span>Flix</span></h1></Link>
            <Link to="/favoritos">Meus filmes</Link>
        </header>
    )
}

export default Header;