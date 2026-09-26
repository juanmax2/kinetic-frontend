import './TermsOfUse.css'

export function TermsOfUse() {

    return (

        <section className="terms-of-use-container">

            <h1 className="terms-of-use-title">Terms of Use</h1>
            <p>Last updated: September 26, 2026</p>

            <article className="terms-of-use-box">
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using this platform, you agree to comply 
                    with and be bound by these Terms of Use. If you do not 
                    agree with any part of these terms, please do not use 
                    our services.
                </p>
            </article>

            <article className="terms-of-use-box">
                <h2>2. User Accounts</h2>
                <ul className="terms-of-use-list">
                    <li>You must provide accurate and complete information when registering an account.</li>
                    <li>You are solely responsible for maintaining the confidentiality of your login credentials and password.</li>
                    <li>You are responsible for all activities that occur under your account.</li>
                </ul>
            </article>

            <article className="terms-of-use-box">
                <h2>3. Acceptable Use</h2>
                <p>You agree not to misuse the platform. Prohibited activities 
                    include attempting to breach security measures, accessing 
                    other user accounts, introducing malicious code, or using 
                    the service for unlawful purposes.
                </p>
            </article>

            <article className="terms-of-use-box">
                <h2>4. Intellectual Property</h2>
                <p>
                    All content, design, code, and logos associated with this 
                    platform are the exclusive property of the creator. 
                    Unauthorized use or reproduction is strictly prohibited.
                </p>
            </article>

            <article className="terms-of-use-box">
                <h2>5. Contact Information</h2>
                <p>
                    If you have any questions about these Terms of Use, please 
                    contact us at 
                    <a className="mail-send-link" href="mailto:juanmajge@gmail.com">
                        <strong> juanmajge@gmail.com</strong>.
                    </a>
                </p>
            </article>

        </section>
    )
}