import React from 'react';

const Banner = ({ BannerImg, BannerTitle }) => { //Valeurs destructurées. consiste à extraire des valeurs d'un objet, d'un tableau ou d'un autre type de données complexe. Cela permet d'accéder aux valeurs individuellement et d'assigner les valeurs à des variables
    return (
        <div className="banner wrapper">
        <img src={BannerImg} className="img_banner" alt={BannerImg} />
        <h1 className="banner_txt">{BannerTitle}</h1>
    </div>
    );
};

export default Banner;