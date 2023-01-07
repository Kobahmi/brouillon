import React from "react";
import Image from "../images/illustration-flowing-conversation.svg";
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
        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div>
            <img
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-mirror="true"
              className="object-cover w-full h-full"
              src={Image}
              alt="travail"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-4 py-6 md:pl-10 md:border-gray-700 md:border-solid md:border-l-2">
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
              <li>Infiniti</li>
            </ul>

            <p className=" text-white">
              Et plusieurs autres marques en developpement.
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

export default Integration;
