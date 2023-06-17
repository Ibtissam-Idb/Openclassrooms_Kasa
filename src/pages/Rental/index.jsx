import { Navigate } from 'react-router-dom';
import "./style.scss";
import Rentals from "../../models/rentals.json";
import Slider from "../../components/Slider/index";
import fullStar from "../../assets/full_star.svg";
import emptyStar from "../../assets/empty_star.svg";
import Collapse from "../../components/Collapse";

function Rental() {

    //  Get correct rental
    const rentals = Rentals;
    const currentURL = new URL(window.location.href);
    const URLId = currentURL.searchParams.get("id");
    const Rental = rentals.find(rental => rental.id === URLId)

    if(!Rental) { return <Navigate to="/notfound" />}

    //  Generate tags

    const tagList = Rental.tags.map((tag, index) => (
        <li key={ index } className="tag_element">{ tag }</li>
    ));

    // Generate stars

    const rating = parseInt(Rental.rating);
    const stars = [];

    for(let i = 0; i < 5; i++) {
        const starKey = `star-${i}`;

        i < rating ? stars.push(<img alt="full star" src={ fullStar } key={ starKey } className="star_icon" />) :
        stars.push(<img alt="empty star" src={ emptyStar } key={ starKey } className="star_icon" />)
    }

    // Generate Equipments

    const equipments = Rental.equipments.map((equipment, index) => (
        <li key={ index } className="equipment_element">{ equipment }</li>
    ))

    const equipmentsList = 
        <ul className="equipments_list">
        { equipments }
        </ul>

    return (
        <section className="rental_section">
            <Slider slides={Slider.slides} />

            <article className="rental_description">
                <div className="rental_presentation">
                    <div className="rental_presentation--col60">
                    <h1 className="rental_name">{Rental.title}</h1>
                        <p className="rental_location">{Rental.location}</p>
                        <ul className="tag_list">
                            { tagList }
                        </ul>
                    </div>
                    <div className="rental_presentation--col40">
                        <div className="host_profile">
                            <p className="host_name">{Rental.host.name}</p>
                            <div className="host_picture" style={{ backgroundImage: "url(" + Rental.host.picture + ")" }} />
                        </div>
                        <div className="ratings">
                            { stars }
                        </div>
                    </div>
                </div>

                <div className="rental_collapse">
                    <Collapse title="Description" 
                    text={ Rental.description }/>
                    <Collapse title="Équipements"
                    text={ equipmentsList } />
                </div>
            </article>
        </section>
    );
}

export default Rental;