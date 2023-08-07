// IMPORTS
import { Link } from 'react-router-dom'
import './footer.scss'

// ASSETS
import Logo from '../../assets/LOGO-footer.png'


// LAYOUT FOOTER

function Footer () {
     return (
        <footer className='ContFooter'>
            <Link to="/">
                <img src={Logo} alt='logo kasa'/>
            </Link>
            <p className='ContFooter-Text'>© 2023 Kasa. All rights reserved</p>
        </footer>
     )
}

export default Footer