//ASSETS
import DataLocation from '../../assets/location.json'
import { Link } from 'react-router-dom'
//STYLES
import './CardLocation.scss'

function Cardlocation () {
    return(
    <section className='ContLocation'>
        {DataLocation.map((location)=> (
            <Link to={`/location/${location.id}`} key={location.id} >
                <div className='ContCard'>
                    <img className='ContCard-Img' src={location.cover} alt={location.title}/>
                    <h2 className='ContCard-Title'>{location.title}</h2>
                </div>
            </Link> ))}
    </section>
    )   
}
export default Cardlocation