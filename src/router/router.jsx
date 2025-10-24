import { 
    createBrowserRouter, 
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
import FindJobs from "../pages/findJobs/FindJobs";
import Recruiters from "../pages/recruiters/Recruiters";
import Candidates from "../pages/candidates/Candidates";
import Blog from "../pages/blog/Blog";
import AboutUs from "../pages/aboutUs/AboutUs";


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
        },
        {
            path: "find-job",
            element: <FindJobs></FindJobs>
        },
        {
            path: "recruiters",
            Component: Recruiters
        },
        {
            path: "candidates",
            element: <Candidates></Candidates>
        },
        {
            path: "blog",
            Component: Blog
        },
        {
            path: "about-us",
            Component: AboutUs
        }

    ]
  },
]);

export default router;