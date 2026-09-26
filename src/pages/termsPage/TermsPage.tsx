import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { TermsOfUse } from "../../components/termsOfUse/TermsOfUse";


export function TermsPage() {

    return (
        <>
            <Header />
            <MainContent>
                <TermsOfUse />
            </MainContent>
            <Footer />
        </>
    )
}