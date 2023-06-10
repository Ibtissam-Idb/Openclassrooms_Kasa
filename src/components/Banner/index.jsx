import React from "react";
import "./style.scss";
import homeBanner from "../../assets/home_banner.png";
import aboutBanner from "../../assets/about_banner.png"

function Banner() {

    const isHomepage = window.location.href.endsWith("/");
    const children = isHomepage ? <h1>Chez vous,<br className="display_phone" /> partout et ailleurs</h1> : null;

    const bgImage = isHomepage ? homeBanner : aboutBanner;

    return (
        <article className="banner">
            <div className="banner_image" style={{ backgroundImage: "url(" + bgImage + ")" }}>
                <div className="banner_image_overlay">
                    {children}
                </div>
            </div>
        </article>
    )
}

export default Banner;