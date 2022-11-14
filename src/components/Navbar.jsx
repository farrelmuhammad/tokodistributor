import React, { useState } from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-3 left-0 w-full z-[999]">
        <div class="grid grid-cols-2 gap-2">
          <div className="flex justify-around">
            <img src={Logo} alt="tokodistributor" className="h-10" />
          </div>
          <div className="flex justify-center">
            <a className="bg-white hover:text-red-800 text-red-500 font-semibold rounded-lg py-1.5 px-6 ml-5">
              Daftar Sekarang
            </a>
          </div>
        </div>
        {/* <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src={Logo} alt="tokodistributor" className="h-10" />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="bg-white hover:text-red-800 text-red-500 font-semibold rounded-lg py-1.5 px-6 ml-5">
                  Daftar Sekarang
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
