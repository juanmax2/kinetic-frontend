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
                    <li>Política de privacidad</li>
                    <li>Términos de uso</li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Kinetic. Creado por Juanma González.</p>
            </div>
        </footer>
    )
}