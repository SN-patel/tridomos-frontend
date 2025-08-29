import { createBrowserRouter } from "react-router";
import Login from "../features/login/components/Login";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    }
])