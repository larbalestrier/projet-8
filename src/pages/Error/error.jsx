import { Link } from "react-router-dom"


import './error.scss'
function Error() {
    return (
        <section className="ContError">
            <h1 className="ContError-title">404</h1>
            <p className="ContError-Text"> Oups! La page que vous demandez n'existe pas.</p>
            < Link to="/" className="ContError-link">Retourner sur la page d'acceuil</Link>
        </section>
    )
}
 
export default Error