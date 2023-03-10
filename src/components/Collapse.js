import { useState } from "react";
import arrowsDown from "../assets/flecheBas.png";
import arrowsTop from "../assets/flecheHaut.png";

const Collapse = ({ collapseTitle, collapseInfo }) => {
    // état initialisé à false : contenu est masqué par défaut
    const [collapseOpen, setCollapseOpen] = useState(false);
    // changer l'état de collapseOpen entre true et false
    const toggle = () => {
        if (!collapseOpen) {
            setCollapseOpen(true);
        } else {
            setCollapseOpen();
        }
    };

    return (
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
                    <img src={arrowsDown} alt="collapse fermé" />
                )}
            </button>
            {collapseOpen && (
                <div className="toggle">
                    <p>{collapseInfo}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;
