import React from 'react';
// ASSETS
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';
import './ratinx.scss'

const Rating = ({ rating }) => {
    const stars = [];
    
    // Boucle pour créer les étoiles en fonction de la note donnée.
    for (let i = 0; i < 5; i++) {
        if (i < rating)  {
            // Ajouter une étoile active au tableau si l'indice est inférieur à la note.
            stars.push(<img key={i} src={StarActive} alt="Star" className='Stars' />);
        }
        else {
            // Ajouter une étoile inactive au tableau si l'indice est supérieur ou égal à la note.
            stars.push(<img key={i} src={StarInactive} alt="Empty Star" className='Stars'/>);
        }      
    }
    
    // Renvoyer le tableau d'étoiles enveloppé dans une div.
    return <div>{stars}</div>; 
}

export default Rating;

