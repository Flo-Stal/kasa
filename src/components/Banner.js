import React from 'react';
import BannerAboutImg from "../assets/kalen-emsley.jpg";

    const Banner = ({ BannerImg, BannerTitle, pageName }) => { //Valeurs destructurées. consiste à extraire des valeurs d'un objet, d'un tableau ou d'un autre type de données complexe. Cela permet d'accéder aux valeurs individuellement et d'assigner les valeurs à des variables
        return (
            <div className="banner wrapper">
            {pageName === 'about' ? <img src={BannerAboutImg} className="img_banner" alt={BannerImg} />
            : <picture>
                <source srcSet={require('../assets/IMG-small.png')} media="(max-width: 374px)" />
                <source srcSet={require('../assets/IMG.jpg')} media="(min-width: 375px)" />
                <img src={BannerImg} className="img_banner" alt={BannerImg} />
            </picture>
            }
            <h1 className="banner_txt">{BannerTitle}</h1>
        </div>
        );
    };

export default Banner;

