import './navbar.css'
import logoImg from '../../assets/images/logo.png';
import profileImg from '../../assets/images/profile.png';
import cartImg from '../../assets/images/cart.png';
import searchImg from '../../assets/images/search.png';



export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-top">

                <img className="logo" src={logoImg} alt="imagem da logo com uma personagem de estilo anime"/>

                <div className="search-box">
                    <input type="text" placeholder="Pesquisar..." />
                    <button type="submit">
                        <img src={searchImg} alt="Icone de pesquisa" />
                    </button>
                </div>

                <img className="user-profile" src={profileImg} alt="icone de usuario"/>

                <img className="shopping-cart" src={cartImg} alt="icone de carrinho de supermercado"/>

            </div>

            <div className="line"></div>

            <div className="navbar-bottom">
                <ul className="navbar-links">
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

    )

}