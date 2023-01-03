import { Link } from "gatsby";
import * as React from "react";

const Header = () => (
  <section className="absolute w-full z-30 text-white">
    <nav className="flex flex-col justify-between items-center p-6 sm:flex-row">
      <Link to="/" className="text-4xl font-bold">
        logotest
      </Link>
      <ul className="flex gap-2 text-sm font-bold pt-6 sm:pt-0 sm:gap-4 sm:text-lg">
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            info1
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            info2
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            info3
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            info4
          </Link>
        </li>
      </ul>

      <ul className="flex gap-2 text-sm font-bold pt-6 sm:pt-0 sm:gap-4 sm:text-lg">
        <li>
          {" "}
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            testage1
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/"
            className="rounded px-1 py-1 hover:bg-slate-200 hover:bg-opacity-10 duration-100 ease-in"
          >
            testage2
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default Header;
