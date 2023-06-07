import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import demoUser from "../../assets/demo-user.png";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 navLinkClass"
              : "md:text-white navLinkClass"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 navLinkClass"
              : "md:text-white navLinkClass"
          }
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 navLinkClass"
              : "md:text-white navLinkClass"
          }
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
      <li className="hidden md:block lg:block">
        <img
          src={demoUser}
          className="w-14 rounded-full"
          alt="User Profile Photo"
        />
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 navLinkClass"
              : "md:text-white navLinkClass"
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 navLinkClass"
              : "md:text-white navLinkClass"
          }
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <button className="text-white navLinkClass">LogOut</button>
      </li>
    </>
  );

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className="md:w-[75%] lg:w-[75%] md:py-3 lg:py-3 mx-auto fixed md:-top-3 left-0 right-0 z-10 bg-white md:bg-transparent">
      <div className={colorChange ? "navbar colorChange" : "navbar"}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className=" normal-case text-xl">
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-16 px-1">{navItems}</ul>
        </div>
        <div className="navbar-end md:hidden lg:hidden gap-16">
          <img
            src={demoUser}
            className="w-14 rounded-full"
            alt="User Profile Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
