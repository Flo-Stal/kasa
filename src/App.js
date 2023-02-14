import React from "react";
//importe React qui est une dépendance nécessaire pour créer des applications React
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importe les composants nécessaires de react-router-dom pour créer des routes
import Home from "./pages/Home";
//importe les différentes pages de l'application
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import AccommodationSheet from "./pages/AccommodationSheet";
//importe les différents composants de l'application
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    //déclaration et export d'une fonction qui s'exécute lorsque App.js est appelé
    return (
        <BrowserRouter>
            {/* utilisation du composant BrowserRouter pour permettre l'utilisation des routes */}
            <Header />
            <Routes>
                {/* utilisation du composant Routes pour permettre la création de routes */}
                <Route path="/" element={<Home />} />
                {/* utilisation du composant Route pour définir les routes et les pages à afficher */}
                <Route path="/about" element={<About />} />
                {/* path="*" si chemin ne correspond pas à un chemin déclaré au dessus envoie vers la page d'erreur */}
                <Route
                    path="/accommodation/:id"
                    element={<AccommodationSheet />}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
// exporte la fonction App pour permettre son importation dans d'autres fichiers
