import "./style.scss";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/index.jsx";
import { NavLink } from "react-router-dom";
import { fetchAppartment } from "../../service";

function Home() {

    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        async function getAppartment() {
            const appartment = await fetchAppartment();
            setRentals(appartment)
        }
        getAppartment();
    }, []);

    const rentalPiece = rentals.map((rental) =>
        <div key={rental.id} className="rental" style={{ backgroundImage: "url(" + rental.cover + ")" }}>
            <div className="rental_linear_overlay">
                <NavLink to={`rental/${rental.id}`}>
                    <h2 className="rental_name">{rental.title}</h2>
                </NavLink>
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