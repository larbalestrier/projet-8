//IMPORT
import './about.scss'
//COMPONENTS
import Collapse from '../../components/Collapse/Collapse'
//ASSETS 
import Banner from '../../assets/Image source 2.png'
import Data from "../../assets/collapse.json";


// Page About > Contient une bannière et le composant Collapse 
function About() {
    return (
       <section>
        <img className='BannerCont' alt='Paysage' src={Banner} />
        <Collapse data={Data} customClass="contCollapse"/>
       </section>
    )
  }
  
export default About