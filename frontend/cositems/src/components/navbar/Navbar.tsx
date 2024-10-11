import './Navbar.css';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import profileImg from '../../assets/icons/navbar/profile.png';
import cartImg from '../../assets/icons/navbar/cart.png';
import searchImg from '../../assets/icons/navbar/search.png';
import { Link } from 'react-router-dom';

export function Navbar() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search/${searchQuery}`);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <img className="logo" src={logoImg} alt="imagem da logo com uma personagem de estilo anime" />

                <form className="search-box" onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        placeholder="Pesquisar..." 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                    />
                    <button type="submit">
                        <img src={searchImg} alt="Icone de pesquisa" />
                    </button>
                </form>
                <Link to={"/usuarios"}>
                <img className="user-profile" src={profileImg} alt="icone de usuario" />
                </Link>
                
                <Link to={"/cart"}>
                    <img className="shopping-cart" src={cartImg} alt="icone de carrinho de supermercado" />
                </Link>
            </div>

            <div className="line"></div>

            <div className="navbar-bottom">
                <ul className="navbar-links">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <p>Produtos</p>
                    </li>
                    <li>
                        <p>Sobre</p>
                    </li>
                    <li>
                        <p>Contato</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
