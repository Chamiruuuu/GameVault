import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Sidebar.css";
import {
  HomeIcon,
  StarIcon,
  HeartIcon,
  ClockIcon,
  CalendarIcon,
  TrophyIcon,
  FlameIcon,
  Gamepad2Icon,
  SwordIcon,
  BrainIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CrosshairIcon,
  CarIcon,
  MountainIcon,
  FlagIcon,
  Menu,
  Home,
  Calendar,
  Trophy,
  GamepadIcon,
  ChevronDown,
  Star,
  Clock,
  Award,
} from "../Data/Incons.js";

// eslint-disable-next-line react/prop-types
const SideNav = ({ handleClick, handleGenre }) => {
  const [show, setShow] = useState(false);
const [drawerShow, setDrawerShow] = useState(null); 

const handleShow = () => {
  setShow(!show);
};

return (
  <>
    <div className="drawer w-full m-5 z-10 fixed lg:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={drawerShow} />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <Menu className="w-10 h-10 text-white hover:text-primary transition-colors duration-200" />
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col gap-2">
          {/* Home Section */}
          <li className="hover:bg-base-300 rounded-lg transition-colors duration-200">
            <div
              className="flex items-center gap-3 p-3 cursor-pointer"
              onClick={() =>
                setDrawerShow((prev) => (prev === "home" ? null : "home")) 
              }
            >
              <Home className="w-5 h-5" />
              <span className="text-lg font-medium">Home</span>
              <ChevronDown
                className={`w-4 h-4 ml-auto transition-transform duration-200 ${drawerShow === "home" ? "rotate-180" : ""}`}
              />
            </div>
            {drawerShow === "home" && (
              <ul className="ml-4 mt-2 space-y-2 animate-slideDown">
                <li className="hover:bg-base-100 rounded-md transition-all duration-200">
                  <Link
                    to="/favorites"
                    className="flex items-center gap-2 p-2"
                    onClick={() => setDrawerShow(null)} 
                  >
                    <Star className="w-4 h-4" />
                    <span>Favorites</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* New Release Section */}
          <li className="hover:bg-base-300 rounded-lg transition-colors duration-200">
            <div
              className="flex items-center gap-3 p-3 cursor-pointer"
              onClick={() =>
                setDrawerShow((prev) => (prev === "newRelease" ? null : "newRelease")) // Toggle section visibility
              }
            >
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-medium">New Release</span>
              <ChevronDown
                className={`w-4 h-4 ml-auto transition-transform duration-200 ${drawerShow === "newRelease" ? "rotate-180" : ""}`}
              />
            </div>
            {drawerShow === "newRelease" && (
              <ul className="ml-4 mt-2 space-y-2 animate-slideDown">
                <li className="hover:bg-base-100 rounded-md transition-all duration-200">
                  <a
                    onClick={() => {
                      handleClick("last30Days");
                      setDrawerShow(null); // Close the drawer when a section is clicked
                    }}
                    className="flex items-center gap-2 p-2"
                  >
                    <Clock className="w-4 h-4" />
                    <span>Last 30 Days</span>
                  </a>
                </li>
                <li className="hover:bg-base-100 rounded-md transition-all duration-200">
                  <a
                    onClick={() => {
                      handleClick("thisWeek");
                      setDrawerShow(null); // Close the drawer when a section is clicked
                    }}
                    className="flex items-center gap-2 p-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>This Week</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* TOP Section */}
          <li className="hover:bg-base-300 rounded-lg transition-colors duration-200">
            <div
              className="flex items-center gap-3 p-3 cursor-pointer"
              onClick={() =>
                setDrawerShow((prev) => (prev === "top" ? null : "top")) // Toggle section visibility
              }
            >
              <Trophy className="w-5 h-5" />
              <span className="text-lg font-medium">TOP</span>
              <ChevronDown
                className={`w-4 h-4 ml-auto transition-transform duration-200 ${drawerShow === "top" ? "rotate-180" : ""}`}
              />
            </div>
            {drawerShow === "top" && (
              <ul className="ml-4 mt-2 space-y-2 animate-slideDown">
                <li className="hover:bg-base-100 rounded-md transition-all duration-200">
                  <a
                    onClick={() => {
                      handleClick("Best of the year");
                      setDrawerShow(null); // Close the drawer when a section is clicked
                    }}
                    className="flex items-center gap-2 p-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>Best of the Year</span>
                  </a>
                </li>
                <li className="hover:bg-base-100 rounded-md transition-all duration-200">
                  <a
                    onClick={() => {
                      handleClick("Best of 2024");
                      setDrawerShow(null);
                    }}
                    className="flex items-center gap-2 p-2"
                  >
                    <Trophy className="w-4 h-4" />
                    <span>Popular in 2024</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Genres Section */}
          <li className="hover:bg-base-300 rounded-lg transition-colors duration-200">
            <div
              className="flex items-center gap-3 p-3 cursor-pointer"
              onClick={() =>
                setDrawerShow((prev) => (prev === "genres" ? null : "genres")) // Toggle section visibility
              }
            >
              <GamepadIcon className="w-5 h-5" />
              <span className="text-lg font-medium">GENRES</span>
              <ChevronDown
                className={`w-4 h-4 ml-auto transition-transform duration-200 ${drawerShow === "genres" ? "rotate-180" : ""}`}
              />
            </div>
            {drawerShow === "genres" && (
              <ul className="ml-4 mt-2 space-y-2 animate-slideDown">
                {["Action", "Strategy", "RPG", "Shooter", "Adventure", "Racing", "Sports"].map((genre) => (
                  <li key={genre} className="hover:bg-base-100 rounded-md transition-all duration-200">
                    <a
                      onClick={() => {
                        handleGenre(genre);
                        setDrawerShow(null); // Close the drawer when a section is clicked
                      }}
                      className="flex items-center gap-2 p-2"
                    >
                      <GamepadIcon className="w-4 h-4" />
                      <span>{genre}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>

      <div className="hidden lg:drawer drawer-open lg:relative lg:w-[20%]  lg:min-h-screen mt-20 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-transparent min-h-full w-80 p-4 font-sans font-bold text-white text-2xl">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 text-3xl "
                id="abt"
              >
                <div className="bg-gray-800 p-2 rounded-full">
                  <HomeIcon className="w-6 h-6 text-white" />
                </div>
                Home
              </Link>
            </li>
            <ul className="text-gray-100 font-light text-lg">
              <li>
                <Link to="/favorites" className="flex items-center gap-2">
                  <div className="bg-gray-800 p-2 rounded-full">
                    <HeartIcon className="w-5 h-5 text-white" />
                  </div>
                  Favorites
                </Link>
              </li>
            </ul>
            <ul className="text-gray-100 font-light text-lg">
              <li>
                <a
                  className="font-sans font-bold text-white text-2xl flex items-center gap-2"
                  id="abt"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  New Release
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("last30Days")}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <CalendarIcon className="w-5 h-5 text-white" />
                  </div>
                  Last 30 days
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("thisWeek")}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <CalendarIcon className="w-5 h-5 text-white" />
                  </div>
                  This week
                </a>
              </li>
            </ul>

            <ul className="text-gray-100 font-light text-lg">
              <li>
                <a
                  className="font-sans font-bold text-white text-2xl flex items-center gap-2"
                  id="abt"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <TrophyIcon className="w-6 h-6 text-white" />
                  </div>
                  TOP
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("Best of the year")}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <StarIcon className="w-5 h-5 text-white" />
                  </div>
                  Best of the Year
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleClick("Best of 2024")}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <FlameIcon className="w-5 h-5 text-white" />
                  </div>
                  Popular in 2024
                </a>
              </li>
            </ul>

            <ul className="text-gray-100 font-light text-lg">
              <li>
                <a
                  className="font-sans font-bold text-white text-2xl flex items-center gap-2"
                  id="abt"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <Gamepad2Icon className="w-6 h-6 text-white" />
                  </div>
                  GENRES
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleGenre("Action")}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <SwordIcon className="w-5 h-5 text-white" />
                  </div>
                  Action
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleGenre("Strategy")}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gray-800 p-2 rounded-full">
                    <BrainIcon className="w-5 h-5 text-white" />
                  </div>
                  Strategy
                </a>
              </li>

              <div
                className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              `}
              >
                <li>
                  <a
                    onClick={() => handleGenre("RPG")}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-gray-800 p-2 rounded-full">
                      <TrophyIcon className="w-5 h-5 text-white" />
                    </div>
                    RPG
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleGenre("Shooter")}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-gray-800 p-2 rounded-full">
                      <CrosshairIcon className="w-5 h-5 text-white" />
                    </div>
                    Shooter
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleGenre("Adventure")}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-gray-800 p-2 rounded-full">
                      <MountainIcon className="w-5 h-5 text-white" />
                    </div>
                    Adventure
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleGenre("Racing")}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-gray-800 p-2 rounded-full">
                      <CarIcon className="w-5 h-5 text-white" />
                    </div>
                    Racing
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleGenre("Sports")}
                    className="flex items-center gap-2"
                  >
                    <div className="bg-gray-800 p-2 rounded-full">
                      <FlagIcon className="w-5 h-5 text-white" />
                    </div>
                    Sports
                  </a>
                </li>
              </div>

              <div className="mt-2">
                <button
                  className="btn w-14 bg-gray-800 flex items-center justify-center ml-4 transition-transform duration-300"
                  onClick={handleShow}
                >
                  {show ? (
                    <ChevronUpIcon className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
