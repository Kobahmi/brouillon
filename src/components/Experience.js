import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Experience = () => {
  return (
    <section className="bg-white py-6">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col justify-center items-center text-center px-6">
          <h1 className="flex z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl">
            <span className="bg-clip-text whitespace-nowrap text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
              UNE EXPERIENCE OPTIMISEE
            </span>
          </h1>
          <p className=" pt-2">POUR VOUS ET VOS CLIENTS</p>
          <p className=" text-sm max-w-[30rem] py-10 ">
            A small team of people driven by performance and excellence. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
            massa, varius a, semper congue, euismod non, mi.
          </p>

          <div className="rounded-xl bg-gray-300 h-[2px] max-w-[30rem] w-full "></div>

          <Link
            to="/"
            className="text-black z-20 mx-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in "
          >
            COMMENCER
          </Link>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 md:flex-row">
          <StaticImage
            className="object-cover "
            src="../images/Images.jpg"
            alt="travail"
          />

          <div className="flex flex-col gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6">
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

            <ul className="list-disc  font-bold ml-6">
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

export default Experience;
