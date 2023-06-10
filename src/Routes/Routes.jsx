import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // TODO: ERROR PAGE
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: (
          <PrivateRoute>
            <Instructors></Instructors>
          </PrivateRoute>
        ),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-selected-classes",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "my-enrolled-classes",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
    ],
  },
]);

export default router;
