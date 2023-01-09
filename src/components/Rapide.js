import React from "react";
import { Link } from "gatsby";

const Rapide = () => {
  return (
    <section className="bg-neutral-900  min-h-[500px]">
      <div className="flex justify-center items-center  h-full">
        <div className="flex flex-col justify-center items-center px-6 text-center lg:text-start lg:flex-row lg:justify-between">
          <div>
            <h1 className="flex flex-col z-20 max-w-xl text-2xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-lime-300">DES APPLICATIONS WEBS</span>
              <span className="bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
                ULTRA RAPIDES
              </span>
            </h1>
            <p className="text-white font-bold pt-2 lg:max-w-md">
              POUR DES CONCESSIONAIRES AUTOMOBILES DU QUEBEC
            </p>
          </div>
          <div className="hidden rounded-xl bg-gray-600 w-[1px] h-[21rem] mx-10 lg:block"></div>
          <div>
            <p className="text-white text-sm max-w-lg py-10">
              A small team of people driven by performance and excellence. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </p>

            <Link className="mt-10" to="/">
              <span className=" border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6">
                DEMANDER UNE DEMO
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rapide;
