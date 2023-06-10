import "./style.scss";
import Rentals from "../../models/rentals.json";
import { useState } from "react";
import arrowBack from "../../assets/arrow_back.png";
import arrowForward from "../../assets/arrow_forward.png";

function Slider() {
    // Get pictures from the correct rental
    const currentURL = new URL(window.location.href);
    const URLId = currentURL.searchParams.get("id");
    const Rental = Rentals.find(rental => rental.id === URLId)
    const slides = Rental.pictures;

    // Arrows & text
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const indexText = `${currentIndex + 1}/${slides.length}`;

    return(
        <article className="rental_slider">
            <div className="slider_image" style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
                <div className="slider_text">
                <img alt="Précédent" src={ arrowBack } className="slider_arrow" onClick={ goToPrevious } />
                <p className="slide_index">{ indexText }</p>
                <img alt="Suivant" src={ arrowForward } className="slider_arrow" onClick={ goToNext } />
                </div>
            </div>
        </article>
        
    )

}

export default Slider;