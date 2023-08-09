import React from 'react';
// ASSETS
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';
import './ratinx.scss'

const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating)  {
            stars.push(<img key={i} src={StarActive} alt="Star" className='Stars' />);
        }
        else {
            stars.push(<img key={i} src={StarInactive} alt="Empty Star" className='Stars'/>);
        }      
    }
    return <div>{stars}</div>; 
}

export default Rating;
