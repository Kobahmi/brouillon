import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Automatisation = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            AUTOMATISATION DES STRATÉGIES MARKETING/ PARTENAIRE MARKETING
            LEADSTREAM
          </span>
        </h1>
        <div className="flex flex-col gap-10 items-center p-10 md:flex-row">
          <div className="relative">
            <div data-aos="fade-in" data-aos-duration="1000">
              <div className="absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full  bg-gradient-to-t from-[#30F9FC] to-lime-300"></div>{" "}
            </div>
            <StaticImage src="../images/bureau.webp" alt="travail" />
          </div>

          <div className="flex flex-col text-neutral-700 gap-4 pl-10 py-6">
            <h2 className="flex flex-col">
              <span className="max-w-lg text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                NOS SITES WEB GÉNÈRENT DES FEEDS POUR LE GOOGLE MERCHANT CENTER
              </span>
            </h2>
            <p className="max-w-lg">
              Nos services de marketing seront offerts en partenariat avec
              l'agence Leadstream.
            </p>

            <ul className="list-disc  font-bold ml-6">
              <li>Campagne Facebook et Google Ads</li>
              <li>Référencement et rédaction de contenus</li>
              <li>Conseils et stratégies de marketing</li>
            </ul>

            <Link
              to="/"
              className="flex group btn items-center mr-auto mt-4 text-neutral-700 border-[1px] border-neutral-700 rounded-full transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"
            >
              <span className=" px-4 py-2  font-bold ">COMMENCER</span>
              <svg
                viewBox="0 0 46 16"
                xmlns="http://www.w3.org/2000svg"
                className="-translate-x-2 h-[10px] w-[30px] fill-neutral-700 transition-all duration-300 ease-out group-hover:scale-x-105 group-hover:fill-white"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automatisation;
