import accommodationList from "../datas/accommodationList.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import { Navigate } from "react-router-dom";
import Rating from "../components/Rating";
import Carroussel from "../components/Carroussel";

const AccommodationSheet = () => {
    // récupérer les paramètres passés dans l'URL
    const { id } = useParams();
    // récupérer l'élément qui verifie la condition
    const accommodation = accommodationList.find(
        (accommodationData) => accommodationData.id === id
    );

    return (
        <div>
            {/* redirection de l'utilisateur  */}
            {!accommodation ? (
                <Navigate to="/ErrorPage" />
            ) : (
                <div key={accommodation.id}>
                    <main>
                        <div className="wrapper">
                            {/* importation du carroussel  */}
                            <Carroussel pictures={accommodation.pictures} />
                            <section className="accommodationLocation">
                                <div className="allAccommodationTitle">
                                    <div className="accommodationName">
                                        <h1>{accommodation.title}</h1>
                                        <h2>{accommodation.location}</h2>
                                        <div className="tagsAndNotation">
                                            <ul>
                                                {/* recuperation des tags et stockage dans "li" */}
                                                {accommodation.tags.map(
                                                    (
                                                        accommodationTags,
                                                        index
                                                    ) => (
                                                        <li key={index}>
                                                            {accommodationTags}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="allAccommodationHost">
                                        <div className="accommodationHost">
                                            <p>{accommodation.host.name}</p>
                                            <img
                                                src={accommodation.host.picture}
                                                alt="profil hôte"
                                            />
                                        </div>
                                        {/* importation du rating  */}
                                        <Rating rating={accommodation.rating} />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="wrapper collapseAccommodationPage">
                                    <Collapse
                                        collapseTitle="Description"
                                        collapseInfo={accommodation.description}
                                    />
                                    <Collapse
                                        collapseTitle="Equipements"
                                        collapseInfo={accommodation.equipments.map(
                                            (
                                                accommodationsEquipments,
                                                index
                                            ) => (
                                                <li key={index}>
                                                    {accommodationsEquipments}
                                                </li>
                                            )
                                        )}
                                    />
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            )}
        </div>
    );
};

export default AccommodationSheet;
