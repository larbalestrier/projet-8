// IMPORTS
import { Link, NavLink } from 'react-router-dom'
import './header.scss'

// ASSETS
import Logo from '../../assets/LOGO-header.png'




// Layout Header 
function Header() {
   return (
      <nav className='ContHeader'>
         <Link to="/">
            <img className='ContHeader-Logo' alt='Logo de kasa' src={Logo} />
         </Link>

         <div>
            <NavLink to="/" className='ContHeader-Link'>
               Accueil
            </NavLink>

            <NavLink to="/about" className='ContHeader-Link'>
               À Propos
            </NavLink>
         </div>
      </nav>
   )
 }
 
 export default Header