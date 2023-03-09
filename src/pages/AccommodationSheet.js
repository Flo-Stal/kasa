import accommodationList from "../datas/accommodationList.json";

import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import { Navigate } from "react-router-dom";
import Rating from "../components/Rating";
import Carroussel from "../components/Carroussel";

const AccommodationSheet = () => {

    const { id } = useParams(); //L'API useParams récupère les informations passées en paramètres dans l'URL. Dans ce code, l'id est récupéré dans l'URL et stocké dans la variable 'id'.
    // Cette ligne de code utilise la méthode useParams() pour obtenir un identifiant (id) d'un paramètre fourni à l'API. Une fois que cet identifiant est obtenu, une variable (accommodation) est créée et assignée à la méthode find(). La méthode find() parcourt la liste fournie (accommodationList) et recherche un objet dont l'identifiant (id) correspond à celui fourni par l'API. Une fois trouvé, l'objet est retourné et assigné à la variable accommodation.
    // Dans le code ci-dessus, la méthode useParams() est utilisée pour obtenir l'identifiant d'un paramètre fourni à l'API. Une fois que cet identifiant est obtenu, la méthode find() parcourt la liste fournie (accommodationList) et recherche un objet dont l'identifiant (id) correspond à celui fourni par l'API. Une fois trouvé, l'objet est retourné et assigné à la variable accommodation.
    console.log(id);
    const accommodation = accommodationList.find(
    (accommodationData) => accommodationData.id === id
    ); //Crée une variable accommodation qui sera remplie en parcourant le fichier JSON accommodationList et en vérifiant si l'id de l'élément est égale à l'id récupéré par l'API useParams.


    return (
    <div>
        {!accommodation ? (
        <Navigate to="/ErrorPage" /> 
        ) : ( 
        <div key={accommodation.id}> 
        {/* Ce bout de code vérifie si la variable 'accommodation' est définie ou non. Si elle n'est pas définie, alors la fonction Navigate redirige l'utilisateur vers la page d'erreur "/ErrorPage". Si elle est définie, alors un nouveau composant 'div' est créé, dont la clé est définie par l'id de l'élément récupéré. */}
            <main>
            <div className="wrapper">
            <Carroussel pictures={accommodation.pictures} />

                <section className="accommodationLocation">
                <div className="allAccommodationTitle">
                    <div className="accommodationName">
                    <h1>{accommodation.title}</h1>
                    <h2>{accommodation.location}</h2>
                    <div className="tagsAndNotation">
                        <ul> 
                        {/* Crée un composant "ul" qui affichera la liste des tags de l'élément récupéré. */}
                        {accommodation.tags.map((accommodationTags, index) => (
                            <li key={index}>{accommodationTags}</li>
                        ))} 
                        {/* crée une boucle qui récupère l'ensemble des tags de l'élément et les stocke dans un 'li'. La clé de chaque 'li' est définie par l'index de chaque tag. */}
                        </ul>
                    </div>
                    </div>
                    <div className="allAccommodationHost">
                    <div className="accommodationHost">
                        <p>{accommodation.host.name}</p> 
                        {/* //Affiche le nom de l'hôte récupéré. */}
                        <img src={accommodation.host.picture} alt="profil hôte" />
                        {/* //Affiche l'image de profil de l'hôte récupéré. */}
                    </div>
                    <Rating rating={accommodation.rating} />
                    </div>
                </div>
                </section>
                <section>
                {/* //Déclare un composant <section> qui contiendra la description et les équipements de l'élément récupéré. */}
                <div className="wrapper collapseAccommodationPage">
                    <Collapse
                    collapseTitle="Description"
                    collapseInfo={accommodation.description}
                    />
                    <Collapse
                    collapseTitle="Equipements"
                    collapseInfo={accommodation.equipments.map(
                        (accommodationsEquipments, index) => (
                        <li key={index}>
                            {accommodationsEquipments}
                        </li>
                        )
                    )} 
                    />
                </div> 
                {/* // crée deux composants Collapse qui afficheront la description et les équipements de l'élément récupéré. Le premier composant affichera la description et le second affichera une liste des équipements récupérés. La clé de chaque 'li' est définie par l'équipement de l'élément. */}
                </section>
            </div>
            </main>
        </div>
        )}
    </div>
    );
}

export default AccommodationSheet;