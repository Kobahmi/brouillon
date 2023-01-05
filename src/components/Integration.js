import React from "react";
import Image from "../images/illustration-flowing-conversation.webp";
import { Link } from "gatsby";

const Integration = () => {
  return (
    <section className="bg-black py-6">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-6 text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            INTEGRATION
          </span>
        </h1>
        <div className="flex flex-col gap-10 items-center p-10 md:flex-row">
          <div>
            <img
              data-aos="fade-in"
              data-aos-duration="1000"
              className="object-cover h-full w-full"
              src={Image}
              alt="travail"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4 border-gray-700 border-solid border-l-2 pl-10 py-6">
            <h2 className="flex flex-col">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                INTEGRATION
              </span>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
                AVEC LES MEILLEURES PLATEFORMES
              </span>
            </h2>
            <p className=" text-white">
              Notre portfolio inclus deja plusieurs marques de vehicules neufs:
            </p>

            <ul className="list-disc text-white font-bold ml-6">
              <li>Hyundai</li>
              <li>Kia</li>
              <li>Nissan</li>
              <li>Mazda</li>
              <li>Subaru</li>
              <li>Mitsubishi</li>
              <li>Infinity</li>
            </ul>

            <p className=" text-white">
              Et plusieurs autres marques en developpement.
            </p>

            <Link
              to="/"
              className="text-black z-20 mr-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
            >
              DEMANDER UNE DEMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
