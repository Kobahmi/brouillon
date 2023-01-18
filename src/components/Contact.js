import React from "react";
import Image1 from "../images/Logo.svg";
import { Link } from "gatsby";

const Contact = () => {
  return (
    <section className="bg-gradient-to-t from-[#30F9FC] to-lime-300 px-6 pb-6">
      <div className="max-w-[1200px] mx-auto">
        <Link to="/">
          <img
            className="h-auto w-[16rem] pb-10"
            src={Image1}
            loading="lazy"
            alt="logo"
          />
        </Link>
        <ul className="text-neutral-700 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li className="border-gray-400 border-solid border-l-2 px-6 py-4">
            <div className="flex flex-col max-w-[25rem] gap-4 pl-10 py-6  md:pl-0 md:pr-10">
              <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                LIENS RAPIDES
              </h2>
              <p>Produits</p>
              <p>Démo</p>
              <p>Support</p>
              <p>Contact</p>
            </div>
          </li>

          <li className="border-gray-400 border-solid border-l-2 px-6 py-4">
            <div className="flex flex-col max-w-[25rem] gap-4  pl-10 py-6  md:pl-0 md:pr-10">
              <h2 className=" text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                CONTACT
              </h2>
              <p>Patrick Branchaud</p>
              <p>Contact</p>
            </div>
          </li>

          <li className="border-gray-400 border-solid border-l-2 px-6 py-4">
            <div className="flex flex-col max-w-[25rem] gap-4 pl-10 py-6 md:pl-0 md:pr-10">
              <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                ADRESSE
              </h2>
              <p>34234 boul asdgsdg</p>
              <p>Sherbrooke</p>
              <p>Quebec</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
