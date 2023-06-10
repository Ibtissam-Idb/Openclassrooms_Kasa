import "./style.scss";
import Rentals from "../../models/rentals.json";
import Slider from "../../components/Slider/index";

function Rental() {

    //  Get correct rental
    const rentals = Rentals;
    const currentURL = new URL(window.location.href);
    const URLId = currentURL.searchParams.get("id");
    const Rental = rentals.find(rental => rental.id === URLId)

    //  Generate tags


    return (
        <section className="rental_section">
            <Slider slides={Slider.slides} />

            <article className="rental_description">
                <div className="rental_presentation">
                    <div className="rental_presentation--col70">
                        <h1 className="rental_name">{Rental.title}</h1>
                        <p className="rental_location">{Rental.location}</p>
                    </div>
                    <div className="rental_presentation--col30">
                        <div className="host_profile">
                            <p className="host_name">{Rental.host.name}</p>
                            <div className="host_picture" style={{ backgroundImage: Rental.host.picture }} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Rental;