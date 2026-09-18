import { DashboardPage } from "../../pages/dashboardPage/DashboardPage";
import { EditRoutinePage } from "../../pages/editRoutinePage/EditRoutinePage";
import { GraphicPages } from "../../pages/graphicsPage/GraphicsPage";
import { NewRoutinePage } from "../../pages/newRoutinePage/NewRoutinePage";
import { RoutineDetailPage } from "../../pages/routineDetailPage/RoutineDetailPage";
import { UpdateProfilePage } from "../../pages/updateProfilePage/UpdateProfilePage";
import { WorkoutSessionPage } from "../../pages/workoutPage/WorkoutSessionPage";
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
            },
            {
                path: '/routines/:id',
                element: <RoutineDetailPage />
            },
            {
                path: '/routines/:id/edit',
                element: <EditRoutinePage />
            },
            {
                path: '/workouts/session/:id',
                element: <WorkoutSessionPage />
            },
            {
                path: '/workouts/graphics',
                element: <GraphicPages />
            }
        ]
    }
]