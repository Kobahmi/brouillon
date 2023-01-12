import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Integre = () => {
  return (
    <section className="bg-black p-4 relative z-30">
      <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-6 text-2xl font-bold md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            INTÉGRÉ AVEC VOS OUTILS
          </span>
        </h1>
        <p className="text-white max-w-xl mx-auto text-center">
          Notre plateforme se connecte aux differents API et sources de données
          que vous avez en place. DMS, CRM, Évaluateur, Syndication, etc.
        </p>
        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center">
          POUR VOUS ET VOS CLIENTS
        </p>
        <div className="py-6">
          <StaticImage
            src="../images/Logo2.webp"
            alt="logo"
            placeholder="black"
          />
        </div>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 max-w-xl mx-auto text-center">
          Vous ne trouvez pas votre CRM? Écrivez-nous et nous vous contacterons!
        </p>

        <div className="rounded-xl bg-gray-700 h-[1px] max-w-[30rem] mx-auto w-full "></div>

        <Link className="mt-8 mx-auto" to="/">
          <span className="border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black ">
            COMMENCER
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Integre;
