import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { Graphics } from "../../graphics/components/Graphics";


export function GraphicPages() {

    return (
        <>
            <Header />
            <MainContent>
                <Graphics />
            </MainContent>
            <Footer />
        </>
    )

}