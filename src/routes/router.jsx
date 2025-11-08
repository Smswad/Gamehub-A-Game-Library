import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/auth",
        element: <h2>Authentication</h2>
    },
    {
        path: "/login",
        element: <h2>LogIn</h2>
    },
    {
        path: "/register",
        element: <h2>Register</h2>
    },
    {
        path: "/details",
        element: <h2>Games Details</h2>
    },
    {
        path: "/*",
        element: <h2>404 Error</h2>
    }
]);

export default router;