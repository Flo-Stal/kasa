import { useState } from "react";
import arrowsDown from "../assets/flecheBas.png";
import arrowsTop from "../assets/flecheHaut.png";

const Collapse = ({ collapseTitle, collapseInfo }) => {
    // définit une fonction nommée Collapse qui prend en argument un objet collapseTitle et collapseInfo
    const [collapseOpen, setCollapseOpen] = useState(false);
    // définit un state nommé collapseOpen et une fonction pour le modifier
    //Le useState est initialisé à false car le collapse est défini comme étant fermé par défaut.
    const toggle = () => {
        //définit une fonction nommée toggle qui modifie collapseOpen en fonction de son état (ouvert ou fermé)
        //si collapse est fermé, ouvrir au clic
        if (!collapseOpen) {
            setCollapseOpen(true);
            //si collapse est ouvert , fermer au clic
        } else {
            setCollapseOpen();
        }
    };

    // setCollapseOpen(!collapseOpen)};

    return (
        // retourne une div contenant un bouton qui lorsqu'on clique dessus, va appeler la fonction toggle
        <div className="collapse">
            <button type="button" className="collapse_button" onClick={toggle}>
                {collapseTitle}
                {collapseOpen === true ? (
                    <img
                        className="arrowCollapse"
                        src={arrowsTop}
                        alt="collapse ouvert"
                    />
                ) : (
                    //si le state collapseOpen est true, affiche l'image flecheHaut.png
                    <img src={arrowsDown} alt="collapse fermé" />
                )}
                {/* si le state collapseOpen est false, affiche l'image flecheBas.png */}
            </button>
            {collapseOpen && (
                <div className="toggle">
                    <p>{collapseInfo}</p>
                </div>
            )}
            {/* si collapseOpen est true, affiche le contenu de collapseInfo dans une div nommée toggle */}
        </div>
    );
};

export default Collapse;
