import { useState, useEffect } from "react";

export default function Navbar() {
  return (
    <div className="fixed w-full z-10 text-slate-50">
      <div className="navbar w-3/4 m-auto mt-4 rounded-lg transition md:px-8 bg-slate-600 bg-opacity-20 backdrop-blur-md shadow-lg">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] rounded-box w-52 p-2 bg-slate-600 bg-opacity-80 backdrop-blur-md shadow-lg"
            >
              <li>
                <a>New & Featured</a>
              </li>
              <li>
                <a>Browse Games</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Store</a>
              </li>
              <li>
                <div className="gap-1">
                  <button className="btn border-none text-slate-50">
                    Sign up
                  </button>
                  <button className="btn">Login</button>
                </div>
              </li>
            </ul>
          </div>
          <a className="navbar-end">
            <svg viewBox="0 0 24 24" width="60px" height="60px">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg">New & Featured</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-lg">Categories</summary>
                <ul className="p-2 bg-slate-600 bg-opacity-80 backdrop-blur-md shadow-lg">
                  <li>
                    <a>Men</a>
                  </li>
                  <li>
                    <a>Women</a>
                  </li>
                  <li>
                    <a>Kids</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-lg">New Releases</a>
            </li>
          </ul>
        </div>
        <div className="sm:navbar-end sm:gap-4 sm:flex hidden">
          <button className="btn border-none bg-slate-600 bg-opacity-20 backdrop-blur-md text-slate-50 hover:bg-primary">
            Sign In
          </button>
          <button className="btn bg-slate-600 bg-opacity-20 backdrop-blur-md border-none text-slate-50 hover:bg-primary">Join Us</button>
        </div>
      </div>
    </div>
  );
}
