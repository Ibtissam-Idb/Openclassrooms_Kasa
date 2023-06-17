import "./style.scss";
import logo from "../../assets/logo_white.png";

function Footer() {

    return(
        <footer>
            <div className="footer_banner">
                <img src={logo} alt="Logo Kasa" className="footer_logo"></img>
                <p className="footer_text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )

}

export default Footer