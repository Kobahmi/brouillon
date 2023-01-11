import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="bg-neutral-800 min-h-[580px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]">
      <div className="flex flex-col h-full max-w-[1280px] mx-auto px-6 gap-2 pt-8 lg:pt-16 lg:flex-row lg:items-center">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
          <h1 className="flex z-20 flex-col text-2xl font-bold  md:text-5xl lg:text-6xl">
            <span className="text-lime-300">DES SITES WEBS</span>
            <span className="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
              DE CONCESSIONAIRES
            </span>
          </h1>
          <p className="text-white z-20">
            Concus pour generer des leads de qualite
          </p>

          <Link className="mt-10" to="/">
            <span className="px-4 py-3 border-white border-[1px] rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6">
              DEMANDER UNE DEMO
            </span>
          </Link>
        </div>

        <div className="relative pb-10 mt-[1rem] lg:ml-[-18rem] lg:pb-0">
          <div data-aos="fade-up" data-aos-duration="2000" className="absolute">
            <StaticImage
              src="../images/stars.webp"
              alt="stars"
              placeholder="blurred"
            />
          </div>
          <StaticImage
            src="../images/Images-min.svg"
            alt="stock"
            placeholder="rgb(31 41 55)"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
