import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import NotFound from "../layouts/NotFound";
import Authentication from "../layouts/Authentication";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/auth",
        element: <Authentication></Authentication>,
        children:
            [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                }
            ]
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