import './PrivacyPolicy.css'

export function PrivacyPolicy() {

    return (
        <section className="privacy-policy-container">

            <h1 className="privacy-policy-title">Privacy Policy</h1>
            <p>Last updated: September 26, 2026</p>

            <article className="privacy-policy-box">
                <h2>1. Data Controller</h2>
                <p><strong>Controller:</strong> Juan Manuel González</p>
                <p><strong>Contact Email:</strong> juanmajge@gmail.com</p>
            </article>

            <article className="privacy-policy-box">
                <h2>2. Information We Collect</h2>
                <p>
                    To provide our user acount services and core 
                    functionalities, we may collect the following data:
                </p>
                <ul className="privacy-policy-list">
                    <li>
                        <strong>Account Data:</strong> 
                         Username, email address, and securely hashed password.
                    </li>
                    <li>
                        <strong>Profile Data:</strong> 
                         Additional information voluntarily provided in your user profile.
                    </li>
                    <li>
                        <strong>Technical Data:</strong> 
                         Essential cookies required for session management, security, and authentication.
                    </li>
                </ul>
            </article>

            <article className="privacy-policy-box">
                <h2>3. Purpose of Data Processing</h2>
                <p>
                    We use your personal data exclusively to manage your user account, 
                    maintain a secure session, and enable the platform's features.
                </p>
            </article>

            <article className="privacy-policy-box">
                <h2>4. Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal
                    data. To exercise these rights, please contact us at
                    <a className="mail-send-link" href="mailto:juanmajge@gmail.com">
                        <strong> juanmajge@gmail.com</strong>.
                    </a>
                </p>
            </article>

        </section>
    )
}