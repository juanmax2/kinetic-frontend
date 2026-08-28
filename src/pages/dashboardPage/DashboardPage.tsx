import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { UserRoutines } from "../../user/components/dashboard/dashboardActions/UserRoutines";
import { UserWelcome } from "../../user/components/dashboard/userWelcome/UserWelcome";


export function DashboardPage() {

    return(
        <>
            <Header />
            <MainContent>
                <UserWelcome />
                <UserRoutines />
            </MainContent>
            <Footer /> 
        </>
    )
}