import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { WorkoutSession } from "../../workouts/components/WorkoutSession";


export function WorkoutSessionPage() {

    return (
        <>
            <Header />
            <MainContent>
                <WorkoutSession />
            </MainContent>
            <Footer />
        </>
    )
}