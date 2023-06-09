import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaHome, FaUserGraduate, FaBookReader } from "react-icons/fa";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer md:drawer-open lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="px-10 w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Link to="/" className=" normal-case text-xl flex-1 px-2 mx-2">
            <div className="flex flex-row items-center gap-1 md:gap-3">
              <img
                className="w-8 md:w-11 lg:w-11"
                src={logo}
                alt="Website Logo"
              />
              <h1 className="font-Spicy flex gap-1 text-base md:text-xl text-[#c25934]">
                <span className="text-yellow-500">Summer</span> Symphony
              </h1>
            </div>
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="flex flex-row items-center gap-7">
              {/* Navbar menu content here */}
              <li>
                <p>{user.displayName}</p>
              </li>
              <li>
                <img
                  src={user?.photoURL}
                  className="w-14 rounded-full"
                  alt="User Profile Photo"
                />
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        Content
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className=" flex flex-col gap-5 p-16 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-yellow-500 dashboardNav"
                  : "md:text-black dashboardNav"
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 dashboardNav"
                  : "md:text-black dashboardNav"
              }
            >
              <FaUserGraduate /> Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 dashboardNav"
                  : "md:text-black dashboardNav"
              }
            >
              <FaBookReader /> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
