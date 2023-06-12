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
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import AddaClass from "../Pages/Dashboard/Instructor/AddaClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Dashboard/Payment";
import MyPaymentHistory from "../Pages/Dashboard/MyPaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
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
        path: "manage-users",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manage-classes",
        element: <ManageClass></ManageClass>,
      },
      {
        path: "my-selected-classes",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "my-enrolled-classes",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "my-payment-history",
        element: <MyPaymentHistory></MyPaymentHistory>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "add-a-class",
        element: <AddaClass></AddaClass>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>,
      },
    ],
  },
]);

export default router;
