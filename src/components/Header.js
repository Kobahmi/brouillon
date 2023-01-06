import { Link } from "gatsby";
import * as React from "react";
import Image1 from "../images/Logo.svg";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-neutral-800 lg:absolute">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link to="/">
              {" "}
              <img className="h-auto w-[10rem]" src={Image1} alt="logo" />
            </Link>

            <div className="lg:hidden">
              <button
                aria-label="menu"
                id="commence"
                className="p-2 text-gray-700 rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 border-b-2 border-neutral-600 pb-10 lg:pb-0 lg:border-b-0 lg:flex lg:space-x-6 lg:space-y-0">
              <div className="flex flex-col gap-6 items-center justify-center lg:flex-row">
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">PRODUITS</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">DEMO</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">SUPPORT</Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">CONTACT</Link>
                </li>
                <li className="text-white hover:text-indigo-200 lg:hidden">
                  <Link to="/">
                    <span className="border-2 px-4 py-2 border-lime-300 rounded-full font-bold text-lime-300 transition duration-300 ease-in-out hover:bg-lime-300 hover:text-black">
                      CONNEXION
                    </span>
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200 lg:hidden">
                  <Link to="/">
                    <span className="border-2 px-4 py-2 border-lime-300 rounded-full font-bold text-lime-300 transition duration-300 ease-in-out hover:bg-lime-300 hover:text-black">
                      COMMENCER
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <Link
            to="/"
            className="duration-100 ease-in font-bold px-4 py-2 text-white rounded-full  hover:bg-gray-600"
          >
            CONNEXION
          </Link>
          <Link to="/">
            <span className="border-2 px-4 py-2 border-lime-300 rounded-full font-bold text-lime-300 transition duration-300 ease-in-out hover:bg-lime-300 hover:text-black ">
              COMMENCER
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
