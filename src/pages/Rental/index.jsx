import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./style.scss";
import Slider from "../../components/Slider/index";
import fullStar from "../../assets/full_star.svg";
import emptyStar from "../../assets/empty_star.svg";
import Collapse from "../../components/Collapse";
import { fetchAppartment } from "../../service";

function Rental() {

    const { id } = useParams();
    const navigate = useNavigate()
    const [appartment, setAppartment] = useState(null);

    useEffect(() => {
        async function getAppartment() {
            const appartments = await fetchAppartment();
            const appartment = appartments.find(appart => appart.id === id)
            if (!appartment) {
                navigate("/notfound")
            }
            setAppartment(appartment)
        }
        getAppartment();
    }, [id, navigate]);

    //  Generate tags

    const tagList = appartment && appartment.tags.map((tag, index) => (
        <li key={index} className="tag_element">{tag}</li>
    ));

    // Generate stars

    const rating = appartment && parseInt(appartment.rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
        const starKey = `star-${i}`;

        i < rating ? stars.push(<img alt="full star" src={fullStar} key={starKey} className="star_icon" />) :
            stars.push(<img alt="empty star" src={emptyStar} key={starKey} className="star_icon" />)
    }

    // Generate Equipments

    const equipments = appartment && appartment.equipments.map((equipment, index) => (
        <li key={index} className="equipment_element">{equipment}</li>
    ))

    const equipmentsList =
        <ul className="equipments_list">
            {equipments}
        </ul>

    if (appartment) {
        return (
            <section className="rental_section">
                <Slider slides={Slider.slides} />
                <article className="rental_description">
                    <div className="rental_presentation">
                        <div className="rental_presentation--col60">
                            <h1 className="rental_name">{appartment.title}</h1>
                            <p className="rental_location">{appartment.location}</p>
                            <ul className="tag_list">
                                {tagList}
                            </ul>
                        </div>

                        <div className="rental_presentation--col40">
                            <div className="host_profile">
                                <p className="host_name">{appartment.host.name}</p>
                                <div className="host_picture" style={{ backgroundImage: "url(" + appartment.host.picture + ")" }} />
                            </div>
                            <div className="ratings">
                                {stars}
                            </div>
                        </div>
                    </div>

                    <div className="rental_collapse">
                        <Collapse title="Description"
                            text={appartment.description} />
                        {<Collapse title="Équipements"
                            text={equipmentsList} />}
                    </div>
                </article>
            </section>)
    }


}

export default Rental;