import React from "react";
import { Link } from "gatsby";

const Rapide = () => {
  return (
    <section className="bg-neutral-900 h-[50vh] min-h-[500px]">
      <div className="flex justify-center items-center  h-full">
        <div className="flex flex-col justify-center items-center text-center px-6">
          <h1 className="flex z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl">
            <span className="text-lime-300">DES APPLICATIONS WEBS</span>
            <span className="bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
              ULTRA RAPIDES
            </span>
          </h1>
          <p className="text-white font-bold pt-2">
            POUR DES CONCESSIONAIRES AUTOMOBILES DU QUEBEC
          </p>
          <p className="text-white text-sm max-w-[30rem] py-10">
            A small team of people driven by performance and excellence. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
            massa, varius a, semper congue, euismod non, mi.
          </p>

          <div className="rounded-xl bg-gray-600 h-[1px] max-w-[30rem] w-full "></div>

          <Link
            to="/"
            className="text-black z-20 mx-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
          >
            DEMANDER UNE DEMO
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rapide;
