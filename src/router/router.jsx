import { 
    createBrowserRouter, 
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "register",
            Component: Register
        },
        {
            path: "signin",
            Component: SignIn
        }
    ]
  },
]);

export default router;