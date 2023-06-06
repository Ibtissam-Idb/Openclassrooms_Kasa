import React, { useEffect, useState } from "react";
import "./style.scss";
import logo from "../../assets/logo_color.png";

function Header() {

    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const currentLocation = window.location.href;
        const navItems = Array.from(document.querySelectorAll(".nav_item"));
        const link = navItems.find(navItem => currentLocation.endsWith(navItem.getAttribute("href")))
        
        if(link) { setActiveLink(link.getAttribute("href")) };
    }, [])

    return (
        <header>
            <div className="header_banner">
                <img src={logo} className="header_logo" alt="Logo Kasa" />
                <nav className="header_nav">
                    <ul className="nav_list">
                        <li><a href="/" className={ activeLink === "/" ? "nav_item nav_item--underlined" : "nav_item" }>Accueil</a></li>
                        <li><a href="/about" className={ activeLink === "/about" ? "nav_item nav_item--underlined" : "nav_item" }>À propos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;