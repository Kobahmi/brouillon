import React from "react";
import { Link } from "gatsby";

const Rapide = () => {
  return (
    <section className="bg-neutral-900 pt-2">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center px-6 text-center">
          <div>
            <h1 className="flex flex-col z-20 text-2xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-lime-300">DES APPLICATIONS WEB</span>
              <span className="bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
                ULTRA RAPIDES
              </span>
            </h1>
            <p className="text-white font-bold pt-2">
              POUR DES CONCESSIONAIRES AUTOMOBILES DU QUÉBEC
            </p>
          </div>

          <div>
            <p className="text-white text-sm max-w-lg pt-10 pb-14">
              A small team of people driven by performance and excellence. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </p>

            <Link to="/demo">
              <span className=" border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black">
                DEMANDER UNE DÉMO
              </span>
            </Link>

            <div className="hidden mt-16 rounded-xl bg-gray-600 w-[21rem] mx-auto h-[1px] lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rapide;
