import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRouter } from "./publicRouterFolder/publicRouter.tsx";
import { privateRouter } from "./privateRouter/privateRouter.tsx";


const router = createBrowserRouter([
    ...publicRouter,
    ...privateRouter
])



export default function AppRouter() {

    return <RouterProvider router={router} />
}