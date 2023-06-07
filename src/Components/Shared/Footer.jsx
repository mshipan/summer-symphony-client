import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaMap,
  FaPhone,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0c4b65] py-10">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between bg-yellow-500 px-10 py-5 w-[75%] mx-auto rounded-lg mb-10">
          <div className="text-center md:text-left lg:text-left mb-3 md:mb-0 lg:mb-0">
            <h1 className="text-lg font-bold font-OpenSans text-white leading-3">
              Want to know last news?
            </h1>
            <h1 className="text-3xl font-bold font-OpenSans text-[#0c4b65]">
              Subscribe
            </h1>
          </div>
          <div>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="You Email Address"
                  className="input input-bordered md:pr-40 lg:pr-40 w-1/2 md:w-full lg:w-full"
                />
                <button className="text-white btn bg-[#c25934] border-[#c25934] hover:bg-[#0c4b65] hover:border-[#0c4b65]">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row items-start justify-evenly w-[75%] mx-auto">
          <div className="flex flex-col items-center md:items-start lg:items-start">
            <div className="flex flex-row items-center gap-1 md:gap-3 mb-3">
              <img
                className="w-8 md:w-11 lg:w-11"
                src={logo}
                alt="Website Logo"
              />
              <h1 className="font-Spicy flex gap-1 text-base md:text-xl text-[#c25934]">
                <span className="text-yellow-500">Summer</span> Symphony
              </h1>
            </div>
            <p className="text-white max-w-xs mb-2">
              Summer Symphony: Immerse yourself in the world of music at our
              dynamic and enriching music summer camp learning school.
            </p>
            <div className="text-3xl text-yellow-500 cursor-pointer flex items-center gap-3 ">
              <FaFacebook className="hover:text-white"></FaFacebook>
              <FaTwitter className="hover:text-white"></FaTwitter>
              <FaYoutube className="hover:text-white"></FaYoutube>
              <FaLinkedin className="hover:text-white"></FaLinkedin>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start lg:items-start">
            <h1 className="text-xl font-bold text-yellow-500 mb-3">
              Contact Us
            </h1>
            <div className="flex items-center gap-5">
              <FaMap className="text-yellow-500"></FaMap>
              <p className="text-white hover:text-yellow-500">
                NewYork, 33 Matehouse str., 12/4
              </p>
            </div>
            <div className="flex items-center gap-5">
              <FaPhone className="text-yellow-500"></FaPhone>
              <p className="text-white hover:text-yellow-500">803-33-5644-99</p>
            </div>
            <div className="flex items-center gap-5">
              <MdEmail className="text-yellow-500"></MdEmail>
              <p className="text-white hover:text-yellow-500">
                admin@summer-symphony.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:w-fit lg:items-start lg:w-fit w-full">
            <h1 className="text-xl font-bold text-yellow-500 text-center md:text-left lg:text-left mb-3">
              Usefull Links
            </h1>
            <ul className="text-center md:text-left lg:text-left">
              <li>
                <Link to="/" className="text-white hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/instructors"
                  className="text-white hover:text-yellow-500"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  className="text-white hover:text-yellow-500"
                >
                  Classes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#073548] text-white py-4 text-center">
        <h1>&copy; All Right Reserve | Summer Symphony | 2023</h1>
      </div>
    </>
  );
};

export default Footer;
