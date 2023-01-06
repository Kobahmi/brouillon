import React from "react";
import { Link } from "gatsby";
import Image from "../images/Layer1.webp";

const Hero = () => {
  return (
    <section className="bg-neutral-800 min-h-[680px] lg:h-screen">
      <div className="flex flex-col h-full max-w-[1200px] mx-auto px-6 gap-2 pt-16 lg:pt-0 lg:flex-row lg:items-center">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
          <h1 className="flex z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl">
            <span className="text-lime-300">DES SITES WEBS</span>
            <span className="bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
              DE CONCESSIONAIRES
            </span>
          </h1>
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            className="text-white z-20"
          >
            Concus pour generer des leads de qualite
          </p>

          <Link
            to="/"
            className="my-6 group relative py-2 px-4 overflow-hidden rounded-full bg-white text-lg shadow"
          >
            <div className="absolute inset-0 h-0 bg-lime-300 transition-all duration-[250ms] ease-out group-hover:h-full"></div>
            <span className="relative font-bold text-lime-700 group-hover:text-black">
              DEMANDER UNE DEMO
            </span>
          </Link>
          <Link to="/">
            <span className="border-2 px-4 py-3 border-lime-300 rounded-full font-bold text-lime-300 transition duration-300 ease-in-out hover:bg-lime-300 hover:text-black mr-6">
              DEMANDER UNE DEMO
            </span>
          </Link>

          <Link
            to="/"
            className="relative flex items-center justify-center text-center mt-6 px-4 py-3 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all
            before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-lime-300 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
          >
            <span className="relative font-bold text-lime-300 uppercase">
              DEMANDER UNE DEMO
            </span>
          </Link>

          <Link
            to="/"
            className="mb-6 relative flex items-center justify-center text-center mt-6 px-4 py-3 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full  before:transition-all
            before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-lime-300 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
          >
            <span className="relative font-bold text-lime-300 uppercase">
              DEMANDER UNE DEMO
            </span>
          </Link>

          <Link to="/">
            <span className="border-2 px-4 py-3 border-lime-300 rounded-full font-bold text-black transition duration-300 ease-in-out bg-lime-300 hover:bg-neutral-800 hover:text-lime-300 mr-6">
              DEMANDER UNE DEMO
            </span>
          </Link>
        </div>
        <div className="z-0 mx-auto lg:ml-[-18rem]">
          <img
            className="object-cover h-[320px] w-[313px] md:w-[529px] md:h-[541px] lg:h-[789px] lg:w-[772px]"
            src={Image}
            alt="stock"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
