import React from "react";
import BannerAboutImg from "../assets/kalen-emsley.jpg";

const Banner = ({ BannerImg, BannerTitle, pageName }) => {
    return (
        <div className="banner wrapper">
            {/* affichage des differentes photos sur les deux pages qui utilisent le composant banner */}
            {pageName === "about" ? (
                <img
                    src={BannerAboutImg}
                    className="img_banner"
                    alt={BannerImg}
                />
            ) : (
                <picture>
                    <source
                        srcSet={require("../assets/IMG-small.png")}
                        media="(max-width: 374px)"
                    />
                    <source
                        srcSet={require("../assets/IMG.jpg")}
                        media="(min-width: 375px)"
                    />
                    <img
                        src={BannerImg}
                        className="img_banner"
                        alt={BannerImg}
                    />
                </picture>
            )}
            <h1 className="banner_txt">{BannerTitle}</h1>
        </div>
    );
};

export default Banner;
