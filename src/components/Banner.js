import React from 'react';

const Banner = ({ BannerImg, BannerTitle }) => {
    return (
        <div className="banner wrapper">
        <img src={BannerImg} className="img_banner" alt={BannerImg} />
        {!BannerTitle ? "" : <h1 className="banner_txt">{BannerTitle}</h1>}
    </div>
    );
};

export default Banner;