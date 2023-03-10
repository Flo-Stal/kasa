import React from "react";
import Banner from "../components/Banner";
import accommodationsList from "../datas/accommodationList.json";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Home = () => {
    // creation du state en tableau vide
    const [accommodations, setAccommodations] = useState([]);

    // stock dans le state les accommodations
    useEffect(() => {
        setAccommodations(accommodationsList);
    }, []);
    return (
        <div>
            <Banner BannerTitle="Chez vous, partout et ailleurs" />
            <main>
                <div className="wrapper card">
                    {accommodations.map((accommodation) => (
                        <Card
                            key={accommodation.id}
                            accommodation={accommodation}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
