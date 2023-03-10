import starOrange from "../assets/starOrange.png";
import starGrey from "../assets/starGrey.png";

const Rating = ({ rating }) => {
    const starRating = [];
    let starFull = true;

    for (let i = 0; i < 5; i++) {
        if (i === parseInt(rating)) {
            starFull = false;
        }
        if (starFull === true) {
            starRating.push(
                <img key={i} src={starOrange} alt="étoile orange" />
            );
        } else {
            starRating.push(<img key={i} src={starGrey} alt="étoile grise" />);
        }
    }

    return <div className="starsRating">{starRating}</div>;
};

export default Rating;
