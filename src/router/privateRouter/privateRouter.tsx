import { DashboardPage } from "../../pages/dashboardPage/DashboardPage";
import { PrivateGuard } from "../components/PrivateGuard";


export const privateRouter = [
    {
        element: <PrivateGuard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardPage />
            }
        ]
    }
]