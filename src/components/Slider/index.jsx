import "./style.scss";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import arrowBack from "../../assets/arrow_back.png";
import arrowForward from "../../assets/arrow_forward.png";
import { fetchAppartment } from "../../service";

function Slider() {
  const {id} = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function getAppartment(){
        const appartment = await fetchAppartment();
        const slidePictures = appartment.find(appart=>appart.id === id).pictures
        setSlides(slidePictures)
    }
    getAppartment();
}, []);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const indexText = `${currentIndex + 1}/${slides.length}`;

  return (
    <article className="rental_slider">
      <div className="slider_image" style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
        <div className="slider_text">
          <img alt="Précédent" src={arrowBack} className="slider_arrow" onClick={goToPrevious} />
          <p className="slide_index">{indexText}</p>
          <img alt="Suivant" src={arrowForward} className="slider_arrow" onClick={goToNext} />
        </div>
      </div>
    </article>
  );
}

export default Slider;