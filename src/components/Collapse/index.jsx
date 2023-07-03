import { useState } from "react";
import "./style.scss";
import propTypes from "prop-types";
import arrowCollapse from "../../assets/arrow_collapse.png";

function Collapse({ title, text }) {

    const [closed, setClosed] = useState(false);

    const collapse = () => {
        setClosed(!closed);
    }

    return (
        <div className="collapse">
            <div className="collapse_button">
                <h2 className="collapse_title">{title}</h2>
                <img className="collapse_arrow" src={arrowCollapse}
                    alt={closed ? "Montrer le texte" : "Cacher le texte"}
                    onClick={collapse}
                    style={{ transform: closed ? "rotate(180deg)" : "rotate(0)" }} />
            </div>
            <div className={closed ? "collapse_text_container collapse_text_container--open" : "collapse_text_container"}>
                <div className="collapse_text">{text}</div>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: propTypes.string,
    text: propTypes.oneOfType([
        propTypes.string,
        propTypes.element
    ])
}

export default Collapse;