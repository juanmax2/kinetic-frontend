import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { PrivacyPolicy } from "../../components/privacyPolicy/PrivacyPolicy";


export function PrivacyPage() {

    return (
        <>
            <Header />
            <MainContent>
                <PrivacyPolicy />
            </MainContent>
            <Footer />
        </>
    )
}