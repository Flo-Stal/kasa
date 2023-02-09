import starOrange from "../assets/starOrange.png";
import starGrey from "../assets/starGrey.png";

const Rating = ({ rating }) => {
    const starRating = []; // La fonction commence par créer une variable appelée starRating qui contient un tableau vide.
    let starFull = true;


    for (let i = 0; i < 5; i++) {
    if (i === parseInt(rating)) {
        starFull = false;
    } //  boucle qui itère 5 fois. À chaque itération, elle vérifie si le nombre d'itérations (i) est égal au rating reçu dans le paramètre. Si c'est le cas, la variable starFull devient false.
    if (starFull === true) {
        starRating.push(<img key={i} src={starOrange} alt="étoile orange" />);
    } else {
        starRating.push(<img key={i} src={starGrey} alt="étoile grise" />);
    }
    } //Si starFull est true, on ajoute une étoile orange à la variable starRating, sinon on ajoute une étoile grise

    return <div className="starsRating">{starRating}</div>; //la fonction retourne un div contenant toutes les étoiles ajoutées à starRatin
}

export default Rating;