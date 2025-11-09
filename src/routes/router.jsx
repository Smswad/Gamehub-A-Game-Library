import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import NotFound from "../layouts/NotFound";


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
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/details",
        element: <h2>Games Details</h2>
    },
    {
        path: "/*",
        element: <NotFound></NotFound>
    }
]);

export default router;