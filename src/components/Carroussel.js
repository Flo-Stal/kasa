import React from "react";
import { useState } from "react";
import arrowRight from "../assets/flecheDroite.png";
import arrowLeft from "../assets/flecheGauche.png";

const Carroussel = ({ pictures }) => {
    const [slide, setSlide] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(pictures[slide]);

    const clickNext = () => {
        const lastSlide = slide === pictures.length - 1;
        const newSlide = lastSlide ? 0 : slide + 1;
        setSlide(newSlide);
        setCurrentSlide(pictures[newSlide]);
    };

    const clickPrevious = () => {
        const firstSlide = slide === 0;
        const newSlide = firstSlide ? pictures.length - 1 : slide - 1;
        setSlide(newSlide);
        setCurrentSlide(pictures[newSlide]);
    };

    return (
        <div className="carroussel">
            <img src={[currentSlide]} alt={currentSlide} />
            {pictures.length > 1 ? (
                <div className="arrows">
                    <button type="button" onClick={clickPrevious}>
                        <img src={arrowLeft} alt="photos précédentes" />
                    </button>
                    <button type="button" onClick={clickNext}>
                        <img src={arrowRight} alt="photos suivantes" />
                    </button>
                </div>
            ) : (
                ""
            )}

            <div className="countSlides">
                {pictures.length > 1 ? (
                    <p>
                        {[slide + 1]}/{[pictures.length]}
                    </p>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Carroussel;
