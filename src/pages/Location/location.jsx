import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider/Slider'
import DataLocation from '../../assets/location.json';
import Error from '../Error/error';
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/rating';
import './location.scss';
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
    // Créer un JSON pour le passer en props au composant Collapsehome
    const data = [
      {
         title: 'Description',
         text: logement.description
      },
      {
         title: 'Equipements',
         // Créer une liste avec les équipements
         text: logement.equipments.map(equipment => (
            <p className='TextCollapse' key={equipment}>{equipment}</p>
         ))
      }
   ]
    return (
      <>
         <Slider images={logement.pictures} />
         <section className="PageLocation">
            <div className='PageLocationt-Info'>
               <h1 className="PageLocationt-Tiltle">{logement.title}</h1>
               <div className="PageLocationt-Localisation">{logement.location}</div>
               <ul className='PageLocationt-ul'>
                  {logement.tags.map(tag => (
                     <li className='PageLocationt-li' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>
            <div className='ContHost'>
               <div className='ContHost-info'>
                  <p className='ContHost-Name'>{logement.host.name}</p>
                  <img src={logement.host.picture} alt=""  className='ContHost-Img'/>
               </div>
                  <Rating rating={logement.rating}/>
            </div>
            
         </section>
         
            <Collapse data={data} customClass="custom-class-page2"/>
         
            
        
      </>
      
   );
}

export default Location;
