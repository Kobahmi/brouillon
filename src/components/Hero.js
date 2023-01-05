import React from "react";
import { Link } from "gatsby";
import Image from "../images/Layer1.webp";

const Hero = () => {
  return (
    <section className="bg-neutral-800 min-h-[680px] h-screen">
      <div className="flex flex-col h-full max-w-[1200px] mx-auto px-6 gap-2 pt-16 lg:pt-0 lg:flex-row lg:items-center">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
          <h1 className="flex z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl">
            <span className="text-lime-300">DES SITES WEBS</span>
            <span className="bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
              DE CONCESSIONAIRES
            </span>
          </h1>
          <p className="text-white z-20">
            Concus pour generer des leads de qualite
          </p>
          <Link
            to="/"
            className=" text-black z-20  mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in lg:mr-auto"
          >
            DEMANDER UNE DEMO
          </Link>
        </div>
        <div className="z-0  md:ml-[-18rem]">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            className="h-full w-full"
            src={Image}
            alt="stock"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
