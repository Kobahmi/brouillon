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

        <Link
          to="/"
          className="flex group mt-6 btn items-center text-white border-[1px] border-white rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          <span className=" px-4 py-2  font-bold ">COMMENCER</span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
            class="-translate-x-2 fill-white transition-all duration-300 ease-out group-hover:scale-x-105 group-hover:fill-black"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Integre;
