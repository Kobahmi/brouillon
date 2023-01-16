import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Integration = () => {
  return (
    <section className="bg-black relative z-0 py-6">
      <div className="flex flex-col  max-w-7xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-6 text-2xl font-bold  md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            INTÉGRATION
          </span>
        </h1>
        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div className="relative">
            <div data-aos="fade-in" data-aos-duration="1500">
              <div className="absolute -z-10 translate-y-[1rem] translate-x-[-1rem] h-full w-full rounded-tr-[10rem] rounded-bl-[10rem] bg-gradient-to-t from-[#30F9FC] to-lime-300"></div>
            </div>

            <StaticImage
              className="rounded-tr-[10rem] rounded-bl-[10rem]"
              src="../images/auto.webp"
              alt="travail"
            />
          </div>

          <div className="flex flex-col gap-4 py-6 md:pl-10 md:border-gray-700 md:border-solid md:border-l-2">
            <h2 className="flex flex-col">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300 text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                INTÉGRATION
              </span>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
                AVEC LES MEILLEURES PLATEFORMES
              </span>
            </h2>
            <p className=" text-white">
              Notre portfolio inclus déjà plusieurs marques de véhicules neufs:
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
              Et plusieurs autres marques en développement.
            </p>

            <Link className="mt-10" to="/demo">
              <span className=" border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black">
                DEMANDER UNE DÉMO
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
