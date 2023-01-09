import React from "react";
import { Link } from "gatsby";
import Logo from "../images/Logo2.webp";

const Integre = () => {
  return (
    <section className="bg-black p-4">
      <div className="flex flex-col gap-6 max-w-[1200px] mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-6 text-2xl font-bold md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            INTEGRE AVEC VOS OUTILS
          </span>
        </h1>
        <p className="text-white max-w-xl mx-auto text-center">
          Notre plateforme se connecte aux differents API et sources de donnees
          que vous avez en place. DMS, CRM, Evaluateur, Syndication, etc.
        </p>
        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center">
          POUR VOUS ET VOS CLIENTS
        </p>
        <img src={Logo} className="py-6 w-full h-full" alt="logo" />
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center">
          Vous ne trouvez pas votre CRM? Ecrivez-nous et nous vous contacterons!
        </p>

        <div className="rounded-xl bg-gray-700 h-[1px] max-w-[30rem] mx-auto w-full "></div>

        <Link
          to="/"
          className="text-black z-20 mx-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
        >
          COMMENCER
        </Link>
      </div>
    </section>
  );
};

export default Integre;
