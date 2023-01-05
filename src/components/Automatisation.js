import React from "react";
import Image1 from "../images/illustration-flowing-conversation.svg";
import { Link } from "gatsby";

const Automatisation = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-6 text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            AUTOMATISATION DES STRATEGIES MARKETING/PARTENAIRE MARKETING
            LEADSTREAM
          </span>
        </h1>
        <div className="flex flex-col gap-10 items-center p-10 md:flex-row">
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              className="object-cover h-full w-full"
              src={Image1}
              alt="travail"
            />
          </div>

          <div className="flex flex-col gap-4 pl-10 py-6">
            <h2 data-aos="fade-up" className="flex flex-col">
              <span className="max-w-lg text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                NOS SITES WEB GENERENT DES FEEDS POUR LE GOOGLE MERCHANT CENTER
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" className="max-w-lg">
              Nos services de marketing seront offers en partenariat avec
              l'agence Leadstream.
            </p>

            <ul
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="list-disc  font-bold ml-6"
            >
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
