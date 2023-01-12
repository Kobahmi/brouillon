import { Link } from "gatsby";
import * as React from "react";
import Menu from "../images/menu.svg";
import { useState } from "react";
import Letter1 from "../images/Vector.svg";
import Letter2 from "../images/Vector1b.svg";
import Letter3 from "../images/Vector2b.svg";
import Letter4 from "../images/Vector4.svg";
import Letter5 from "../images/Vector3b.svg";
import Letter6 from "../images/Vector6b.svg";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-lime-300 bg-opacity-100 z-40 lg:absolute lg:bg-opacity-0">
      <div className="justify-between px-6 mx-auto lg:pt-[2px] lg:max-w-7xl lg:items-center lg:flex">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link to="/" className="flex gap-[1px]">
              <img
                data-aos="flip-left"
                data-aos-duration="500"
                className="h-[1.5rem] w-[1.5rem]"
                src={Letter1}
                alt="Letter A"
              />
              <img
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                className="h-[1.5rem] w-[1.5rem] "
                src={Letter2}
                alt="Letter U"
              />
              <img
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-easing="ease-in"
                className="h-[1.5rem] w-[1.5rem] ml-[-0.3rem]"
                src={Letter3}
                alt="Letter T"
              />
              <img
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay="400"
                data-aos-easing="ease-in"
                className="h-[1.5rem] w-[1.5rem] ml-[-0.3rem]"
                src={Letter5}
                alt="Letter O"
              />
              <img
                data-aos="fade-left"
                data-aos-delay="700"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-back"
                className="h-[1.5rem] w-[1.5rem] ml-[-0.3rem]"
                src={Letter4}
                alt="Letter R"
              />
              <img
                data-aos="fade-left"
                data-aos-delay="700"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-back"
                className="h-[1.5rem] w-[1.5rem] ml-[-0.4rem]"
                src={Letter5}
                alt="Letter O"
              />
              <img
                data-aos="fade-left"
                data-aos-delay="700"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-back"
                className="h-[1.5rem] w-[1.5rem]"
                src={Letter5}
                alt="Letter O"
              />
              <img
                data-aos="fade-left"
                data-aos-delay="700"
                data-aos-duration="500"
                data-aos-easing="ease-in-out-back"
                className="h-[1.5rem] w-[1.5rem] ml-[-0.3rem]"
                src={Letter3}
                alt="Letter T"
              />
              <div className="flex justify-start items-end ml-[-0.2rem]">
                <img
                  data-aos="fade-in"
                  data-aos-delay="1350"
                  data-aos-duration="1500"
                  className="h-[0.7rem] w-[0.7rem] "
                  src={Letter6}
                  alt="Rights"
                />
              </div>
            </Link>

            <div className="lg:hidden">
              <button
                aria-label="menu"
                id="commence"
                className="p-2 text-gray-700 rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <p className="text-neutral-700 text-xl mr-[5px] font-bold">
                    X
                  </p>
                ) : (
                  <img className="w-7 h-7" src={Menu} alt="menu" />
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
              <ul className="w-full items-center justify-center text-center space-y-8 border-b-2 border-neutral-600 pb-10 lg:pb-0 lg:border-b-0 lg:flex lg:space-x-6 lg:space-y-0">
                <li className="flex justify-center">
                  <Link
                    className="btn group flex items-center bg-transparent tracking-widest text-white"
                    to="/"
                  >
                    <span className="relative text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                      PRODUITS
                    </span>
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link
                    className="btn group flex items-center bg-transparent tracking-widest text-white"
                    to="/demo"
                  >
                    <span className="relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                      DÉMO
                    </span>
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link
                    className="btn group flex items-center bg-transparent tracking-widest text-white"
                    to="/"
                  >
                    <span className="relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                      SUPPORT
                    </span>
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link
                    className="btn group flex items-center bg-transparent tracking-widest text-white"
                    to="/"
                  >
                    <span className="relative  text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
                      CONTACT
                    </span>
                  </Link>
                </li>
                <li className="text-white  hover:text-indigo-200 lg:hidden">
                  <Link to="/">
                    <span className=" border-2 px-12 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white">
                      CONNEXION
                    </span>
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200 lg:hidden">
                  <Link to="/">
                    <span className="border-2 px-11 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white">
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
            className="btn group  bg-transparent tracking-widest text-white"
            to="/"
          >
            <span className="relative font-bold pb-[2px] text-neutral-700 after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-700 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">
              CONNEXION
            </span>
          </Link>
          <Link to="/">
            <span className="border-[1px] px-4 py-2 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white">
              COMMENCER
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
