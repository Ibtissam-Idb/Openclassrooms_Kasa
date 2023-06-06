import "./style.scss";
import Rentals from "../../models/rentals.json";
import { Link } from "react-router-dom";

function Home() {

    const rentals = Rentals;
    const rentalPiece = rentals.map((rental) =>
        <div className="rental" style={{ backgroundImage: "url(" + rental.cover + ")" }}>
            <div className="rental_linear_overlay">
                <a href={ window.location.href + "rental?id=" + rental.id }>
                <h2 className="rental_name">{rental.title}</h2>
                </a>
            </div>
        </div>
    )

    return (
        <section className="home">

            <article className="home_banner">
                <div className="banner_image">
                    <div className="banner_image_overlay">
                        <h1>Chez vous,<br className="display_phone" /> partout et ailleurs</h1>
                    </div>
                </div>
            </article>

            <article className="rentals">
                {rentalPiece}
            </article>

        </section>
    )

}

export default Home;