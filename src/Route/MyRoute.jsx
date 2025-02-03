import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/useraccount/Login";
import Dashboard from "../Pages/useraccount/Dashboard";


const Myroute = createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
        children: [
            {
              path: "dashboard",
              element: <h1 className="text-3xl font-bold underline bg-slate-600">Dashboard</h1>,
            },
        ],
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
])

export default Myroute