import { Footer } from "../../components/layout/components/footer/Footer";
import { Header } from "../../components/layout/components/header/Header";
import { MainContent } from "../../components/layout/components/mainContent/MainContent";
import { ProfileForm } from "../../user/components/profileForm/ProfileForm";
import './UpdateProfilePage.css'

export function UpdateProfilePage() {

    return (
        <>
            <Header />
            <MainContent>
                <h1 className="update-profile-title">Update your profile!</h1>
                <ProfileForm />
            </MainContent>
            <Footer />
        </>
    )
}