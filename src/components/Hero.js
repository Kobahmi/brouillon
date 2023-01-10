import React from "react";
import { Link } from "gatsby";
import Image from "../images/Layer1v2.webp";

const Hero = () => {
  return (
    <section className="bg-neutral-800 min-h-[580px] md:min-h-[800px] lg:min-h-[940px] ">
      <div className="flex flex-col h-full max-w-[1200px] mx-auto px-6 gap-2 pt-8 lg:pt-16 lg:flex-row lg:items-center">
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

        <div className="z-0 mx-auto lg:ml-[-18rem]">
          <img
            className="object-scale-down h-[320px] w-[313px] md:w-[529px] md:h-[541px] lg:h-[789px] lg:w-[772px]"
            src={Image}
            alt="stock"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
