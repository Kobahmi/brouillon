import { Link } from "gatsby";
import * as React from "react";
import Image1 from "../images/Logo.svg";
import Menu from "../images/menu.svg";
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
                  <p className="text-white font-bold">X</p>
                ) : (
                  <img className="w-6 h-6" src={Menu} alt="menu" />
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
            <div className="flex flex-col gap-6 items-center justify-center lg:flex-row">
              <ul className="items-center justify-center text-center space-y-8 border-b-2 border-neutral-600 pb-10 lg:pb-0 lg:border-b-0 lg:flex lg:space-x-6 lg:space-y-0">
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
              </ul>
            </div>
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
