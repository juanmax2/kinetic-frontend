import { DashboardPage } from "../../pages/dashboardPage/DashboardPage";
import { NewRoutinePage } from "../../pages/newRoutinePage/NewRoutinePage";
import { UpdateProfilePage } from "../../pages/updateProfilePage/UpdateProfilePage";
import { PrivateGuard } from "../components/PrivateGuard";


export const privateRouter = [
    {
        element: <PrivateGuard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />
            },
            {
                path: '/update-profile',
                element: <UpdateProfilePage />
            },
            {
                path: '/routines/new',
                element: <NewRoutinePage />
            }
        ]
    }
]