import { Footer } from '../../components/layout/components/footer/Footer'
import { Header } from '../../components/layout/components/header/Header'
import { MainContent } from '../../components/layout/components/mainContent/MainContent'
import { NewRoutine } from '../../components/routines/components/NewRoutine'
import './NewRoutinePage.css'

export function NewRoutinePage() {


    return (
        <>
            <Header />
            <MainContent>
                <NewRoutine />
            </MainContent>
            <Footer />
        </>

    )
}