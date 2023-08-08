import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider/Slider'
import DataLocation from '../../assets/location.json';
import Error from '../Error/error';

function Location() {
    const [logement, setLogement] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const data = DataLocation.find(location => location.id === id);
        if (data) {
            setLogement(data);
        } else {
            setLogement(null);
        }
    }, [id]);
    if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
      return (<Error />);
   }

    return (
        <section>
           
                <Slider images={logement.pictures} />
           
        </section>
    );
}

export default Location;
