import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";

const Navbar = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [admin] = UseAdmin();
  const { pathname } = useLocation();

  return (
    <div data-theme={theme ? "dark" : "light"} className=="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className=="drawer-toggle" />
      <div className=="drawer-content flex flex-col">
        <div className=="w-full  sticky  navbar bg-base-300">
          {pathname.includes("/dashboard") && (
            <label
              for="my-drawer-2"
              tabIndex="0"
              className=="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}
          <div className=="flex-1 px-2 mx-2 text-2xl font-bold">Clean Co</div>

          <div className=="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className=="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className=="inline-block w-6 h-6 stroke-current"
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
          <div className=="flex-none hidden lg:block">
            <ul className=="menu menu-horizontal gap-x-2">
              <li>
                <NavLink className=="rounded-lg" to="/">
                  Home
                </NavLink>
              </li>
              {admin && (
                <li>
                  <NavLink className=="rounded-lg" to="/dashboard/add-services">
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink className=="rounded-lg" to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className=="rounded-lg" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className=="rounded-lg" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className=="rounded-lg" to="/login">
                  Login
                </NavLink>
              </li>
              <li className=="dropdown dropdown-end dropdown-hover">
                <label
                  tabIndex="0"
                  className=="btn btn-primary btn-outline rounded-lg m-1"
                >
                  Book Now
                </label>
                <ul
                  tabIndex="0"
                  className=="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </li>
              <label className=="swap swap-rotate">
                <input type="checkbox" onClick={() => setTheme(!theme)} />
                <svg
                  className=="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className=="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className=="drawer-side">
        <label htmlFor="my-drawer-3" className=="drawer-overlay"></label>
        <ul className=="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          {admin && (
            <li>
              <NavLink className=="rounded-lg" to="/dashboard/add-services">
                Dashboard
              </NavLink>
            </li>
          )}
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <div
            tabIndex="0"
            className=="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className=="collapse-title text-xl font-medium">
              Bookmark now
            </div>
            <div className=="collapse-content">
              <p>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
