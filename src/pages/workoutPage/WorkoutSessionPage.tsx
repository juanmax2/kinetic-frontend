import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { RestTimer } from "../../components/timer/components/RestTimer";
import { WorkoutSession } from "../../workouts/components/WorkoutSession";


export function WorkoutSessionPage() {

    return (
        <>
            <Header />
            <MainContent>
                <RestTimer />
                <WorkoutSession />
            </MainContent>
            <Footer />
        </>
    )
}