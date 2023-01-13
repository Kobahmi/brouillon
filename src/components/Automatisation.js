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
            <StaticImage
              src="../images/bureau.webp"
              alt="travail"
              placeholder="white"
            />
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

            <Link className="mt-10" to="/demo">
              <span className="px-4 py-3 border-neutral-700 border-[1px] rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white mr-6">
                COMMENCER
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automatisation;
