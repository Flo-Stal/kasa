import React from 'react';

    const Banner = ({ BannerImg, BannerTitle }) => { //Valeurs destructurées. consiste à extraire des valeurs d'un objet, d'un tableau ou d'un autre type de données complexe. Cela permet d'accéder aux valeurs individuellement et d'assigner les valeurs à des variables
        return (
            <div className="banner wrapper">
                <picture>
                    <source srcSet={require('../assets/IMG-small.png')} media="(max-width: 374px)" />
                    <source srcSet={require('../assets/IMG.jpg')} media="(min-width: 375px)" />
                    <img src={BannerImg} className="img_banner" alt={BannerImg} />
                </picture>
            <h1 className="banner_txt">{BannerTitle}</h1>
        </div>
        );
    };

export default Banner;

