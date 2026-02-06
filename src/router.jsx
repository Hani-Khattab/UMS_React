import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Users from "./Pages/Users/Users";
import User from "./Pages/user/User";
import Create from "./Pages/user/Create";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<MainLayout />,
            children:[
                {
                    index:true,
                    element:<Home />
                },

                {
                    path:'About',
                    element:<About />
                },

                {
                    path:'user/create',
                    element:<Create />
                },

                {
                    path:'Users',
                    element:<Users />
                },
                {
                    path:'/users/:id',
                    element:<User />
                }
            ]
        }
    ]
)

export default router;