import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Automatisation = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            AUTOMATISATION DES STRATEGIES MARKETING/ PARTENAIRE MARKETING
            LEADSTREAM
          </span>
        </h1>
        <div className="flex flex-col gap-10 items-center p-10 md:flex-row">
          <div data-aos="fade-in" data-aos-duration="1000" className="relative">
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full  bg-gradient-to-t from-[#30F9FC] to-lime-300"></div>{" "}
            </div>
            <StaticImage
              src="../images/bureau.webp"
              alt="travail"
              placeholder="white"
            />
          </div>

          <div className="flex flex-col gap-4 pl-10 py-6">
            <h2 className="flex flex-col">
              <span className="max-w-lg text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                NOS SITES WEB GENERENT DES FEEDS POUR LE GOOGLE MERCHANT CENTER
              </span>
            </h2>
            <p className="max-w-lg">
              Nos services de marketing seront offers en partenariat avec
              l'agence Leadstream.
            </p>

            <ul className="list-disc  font-bold ml-6">
              <li>Campagne Facebook et Google Ads</li>
              <li>Referencement et redaction de contenus</li>
              <li>Conseils et strategies de marketing</li>
            </ul>

            <Link
              to="/"
              className="text-black z-20 mr-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
            >
              COMMENCER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automatisation;
