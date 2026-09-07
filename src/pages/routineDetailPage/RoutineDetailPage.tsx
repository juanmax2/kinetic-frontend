import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { RoutineDetail } from "../../components/routines/components/RoutineDetail";


export function RoutineDetailPage() {
    
    return (
        <>
            <Header />
            <MainContent>
                <RoutineDetail />
            </MainContent>
            <Footer />
        </>
    )
}
