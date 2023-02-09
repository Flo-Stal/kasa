import React from "react";
import Banner from "../components/Banner";
import BannerImg from "../assets/IMG.jpg";
import accommodationsList from "../datas/accommodationList.json"; 
//importe le fichier JSON qui contient les infos des différentes accommodations
import Card from "../components/Card";
import { useEffect, useState } from "react";
//importe les fonctions useEffect et useState pour pouvoir utiliser le state


const Home = () => {
    const [accommodations, setAccommodations] = useState([]);
    // déclaration d'un state qui contient les informations des différentes accommodations

    useEffect(() => {
        setAccommodations(accommodationsList);
    }, []);
    // utilise useEffect pour mettre à jour le state lorsque le composant Home est appelé
    return (
    <div>
        <Banner
        BannerImg={BannerImg}
        BannerTitle="Chez vous, partout et ailleurs"
        />
        <main>
        <div className="wrapper card">
            {accommodations.map((accommodation) => (
                // méthode "map" pour itérer à travers le tableau "accommodations" directement dans le code jsx
            <Card key={accommodation.id} accommodation={accommodation} />
            // "key" est une propriété spéciale qui permet à React d'identifier chaque instance de la composante "Card" dans le tableau
            //accommodation -> permet à la fonction Card d'accéder aux données spécifiques d'une "accommodation"
            ))}

        </div>
        </main>
        <h1>Acceuil</h1>
    </div>
    );
};

export default Home;
