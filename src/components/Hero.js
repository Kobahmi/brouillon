import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-t from-[#30F9FC] to-lime-300 ">
      <div className="flex flex-col h-full max-w-[1280px] mx-auto px-6 gap-2 pt-8 lg:pt-16 lg:flex-row lg:items-center">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
          <h1 className="flex flex-col z-20 text-neutral-700 text-2xl font-bold  md:text-5xl lg:text-6xl">
            <span>DES SITES WEB</span>
            <span className="whitespace-nowrap">DE CONCESSIONAIRES</span>
          </h1>
          <p className="text-neutral-700 text-lg z-20 pt-3">
            CONÇUS POUR GÉNÉRER DES LEADS DE QUALITÉ
          </p>

          <Link className="mt-10" to="/demo">
            <span className="px-4 py-3 border-neutral-700 border-[1px] rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white mr-6">
              DEMANDER UNE DÉMO
            </span>
          </Link>
        </div>

        <div className="relative pb-10 mt-[1rem] lg:ml-[-18rem] lg:pb-0">
          <div data-aos="fade-up" data-aos-duration="2000" className="absolute">
            <StaticImage
              src="../images/stars.webp"
              alt="stars"
              placeholder="blurred"
              loading="eager"
            />
          </div>
          <StaticImage
            src="../images/Images-min.svg"
            alt="stock"
            placeholder="rgb(31 41 55)"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
