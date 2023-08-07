//ASSETS
import Banner from '../../assets/banner-home.png'

//STYLES
import './Home.scss'

//COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'

// Page d'acceuil > 
function Home() {
    return (
       <section>
         <div className="BannerCont">
            <img className="BannerCont-img" src= { Banner } alt='Paysage'></img>
         </div>
         <Cardlocation/>
       </section>
    )
  }
  
  export default Home