import "./style.scss";
import logo from "../../assets/logo_white.png";
import Rentals from "../../models/rentals.json";

function Footer() {

    const rentalId = Rentals.map(rental => rental.id);
    const currentURL = window.location.href;

    const hasFooter = currentURL.endsWith("/") ||
        currentURL.endsWith("/about") ||
        rentalId.some(id => currentURL.endsWith("/rental?id=" + id));
    
    return(
        <footer style={{ display: hasFooter ? "flex" : "none" }}>
            <div className="footer_banner">
                <img src={logo} alt="Logo Kasa" className="footer_logo"></img>
                <p className="footer_text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )

}

export default Footer