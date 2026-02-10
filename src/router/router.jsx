import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
import Recruiters from "../pages/recruiters/Recruiters";
import Candidates from "../pages/candidates/Candidates";
import Blog from "../pages/blog/Blog";
import AboutUs from "../pages/aboutUs/AboutUs";
import JobDetails from "../pages/jobDetails/JobDetails";
import JobApply from "../pages/jobApply/JobApply";
import PrivateRoutes from "../routes/PrivateRoutes";
import MyApplication from "../pages/myApplication/MyApplication";
import AllJobs from "../pages/All jobs/AllJobs";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import RecruitersDashboard from "../pages/RoleWIseDashboard/RecruitersDashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import ViewApplications from "../pages/ViewApplications/ViewApplications";


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
                path: "all-jobs",
                Component: AllJobs
            },
            {
                path: "job/:id",
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: "add-job",
                element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
            },
            {
                path: "dashboard-layout",
                element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
                children: [
                    {
                        index: true,
                        element: <RecruitersDashboard></RecruitersDashboard>
                    },
                    {
                        path: "recruiters-dashboard",
                        element: <RecruitersDashboard></RecruitersDashboard>
                    },
                    {
                        path: "my-posted-jobs",
                        element: <MyPostedJobs></MyPostedJobs>
                    },

                ]
            },
            {
                path: "job-apply/:id",
                element: <PrivateRoutes> <JobApply></JobApply> </PrivateRoutes>
            },
            {
                path: "my-application",
                element: <PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>
            },
            {
                path: 'applications/:job_id',
                element: <ViewApplications></ViewApplications>
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