import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import BannerImg from "../assets/IMG.jpg";

const Home = () => {
    return (
        <div>
            <Header />
            <Banner
                BannerImg={BannerImg}
                BannerTitle="Chez vous, partout et ailleurs"
            />

            <h1>Acceuil</h1>
        </div>
    );
};

export default Home;