import { Link } from "gatsby";
import * as React from "react";
import Image1 from "../images/Logo.svg";
import Menu from "../images/menu.svg";

const Header = () => (
  <section className="absolute w-full z-30 text-white">
    <nav className="flex justify-between items-center max-w-[1200px]  mx-auto p-6">
      <Link to="/">
        <img className="h-auto w-[10rem]" src={Image1} alt="logo" />
      </Link>

      <button className="icon-toggle lg:hidden">
        <img className="w-6 " src={Menu} alt="menu" />
      </button>

      <ul className="hidden text-xs px-2 gap-2 lg:flex">
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            PRODUITS
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            DEMO
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            SUPPORT
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            CONTACT
          </Link>
        </li>
      </ul>

      <ul className="hidden gap-2 text-sm  pt-6 sm:pt-0 sm:gap-4 sm:text-md lg:flex">
        <li>
          {" "}
          <Link
            to="/"
            className="rounded-full font-bold px-6 py-2 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            CONNEXION
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/"
            className="text-black bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in"
          >
            COMMENCER
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default Header;
