import "./style.css";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header>
            <div className="header_banner">
                <img src={logo} className="header_logo" alt="Logo Kasa" />
                <nav className="header_nav">
                    <ul className="nav_list">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/about">À propos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;