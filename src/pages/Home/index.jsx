import "./style.scss";
import Rentals from "../../models/rentals.json";
import Banner from "../../components/Banner/index.jsx";

function Home() {

    const rentalPiece = Rentals.map((rental) =>
        <div key={ rental.id } className="rental" style={{ backgroundImage: "url(" + rental.cover + ")" }}>
            <div className="rental_linear_overlay">
                <a href={ window.location.href + "rental?id=" + rental.id }>
                <h2 className="rental_name">{rental.title}</h2>
                </a>
            </div>
        </div>
    )

    return (
        <section className="home">

            <Banner />

            <article className="rentals">
                {rentalPiece}
            </article>

        </section>
    )

}

export default Home;