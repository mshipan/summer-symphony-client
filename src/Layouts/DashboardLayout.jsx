import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaUserGraduate,
  FaBookReader,
  FaRegListAlt,
  FaCheckSquare,
  FaUsersCog,
  FaChalkboardTeacher,
} from "react-icons/fa";
import useRoles from "../Hooks/useRoles";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [roles] = useRoles();
  const isAdmin = roles?.isAdmin;
  const isStudent = roles?.isStudent;
  const isInstructor = roles?.isInstructor;

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

          <div className=" normal-case text-xl flex-1 px-2 mx-2">
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
          </div>
          <div className="flex-none hidden md:block lg:block">
            <ul className="flex flex-row items-center gap-7">
              {/* Navbar menu content here */}
              <li>
                <p className="flex flex-col items-end">
                  Hello, {user.displayName}
                  {isAdmin && <small className="italic">Admin Dashboard</small>}
                  {isStudent && (
                    <small className="italic">Student Dashboard</small>
                  )}
                  {isInstructor && (
                    <small className="italic">Instructor Dashboard</small>
                  )}
                </p>
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
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className=" flex flex-col gap-5 py-20 px-5 w-80 h-full bg-base-200">
          {/* Sidebar content here */}

          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="manage-classes"
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500 dashboardNav"
                      : "md:text-black dashboardNav"
                  }
                >
                  <FaChalkboardTeacher /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="manage-users"
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500 dashboardNav"
                      : "md:text-black dashboardNav"
                  }
                >
                  <FaUsersCog /> Manage Users
                </NavLink>
              </li>
            </>
          )}

          {isStudent && (
            <>
              <li>
                <NavLink
                  to="my-selected-classes"
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500 dashboardNav"
                      : "md:text-black dashboardNav"
                  }
                >
                  <FaRegListAlt /> My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="my-enrolled-classes"
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500 dashboardNav"
                      : "md:text-black dashboardNav"
                  }
                >
                  <FaCheckSquare /> My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li>
                <NavLink
                  to="add-a-class"
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500 dashboardNav"
                      : "md:text-black dashboardNav"
                  }
                >
                  <FaRegListAlt /> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="my-classes"
                  className={({ isActive }) =>
                    isActive
                      ? " text-yellow-500 dashboardNav"
                      : "md:text-black dashboardNav"
                  }
                >
                  <FaCheckSquare /> My Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
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
