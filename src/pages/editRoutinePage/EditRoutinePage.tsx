import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { EditRoutine } from "../../components/routines/components/EditRoutine";


export function EditRoutinePage() {

    return (
        <>
            <Header />
            <MainContent>
                <EditRoutine />
            </MainContent>
            <Footer />

        </>
    )
}