import { Link } from 'react-router-dom';
import './Footer.css'

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-brand">
                <img className="footer-logo" src="/kinetic-logo.webp" alt="Kinetic logo" />
                <small>Lleva el control de tus entrenamientos al siguiente nivel</small>
            </div>

            <div className="footer-legal">
                <h4>Legal</h4>
                <ul>
                    <li className='footer-legal-link'><Link to="/privacy-policy">Política de privacidad</Link></li>
                    <li className='footer-legal-link'><Link to="/terms-of-use">Términos de uso</Link></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Kinetic. Created by Juanma González.</p>
            </div>
        </footer>
    )
}