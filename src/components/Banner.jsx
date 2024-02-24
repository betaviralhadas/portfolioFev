import React from "react";
import imgBanner from "../Img/banner_img.webp";
import '../style/Components/_Banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <img
                className="img_banner"
                src={imgBanner}
                alt="banner"
            />
            <h2>Discover my world of junior web development</h2>
        </div>
    )
}
export default Banner;

