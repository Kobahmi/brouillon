import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Experience = () => {
  return (
    <section className="bg-white pt-6 pb-[8.5rem]">
      <div className="flex flex-col items-center text-neutral-700">
        <div className="flex flex-col justify-center items-center text-center px-6">
          <h1 className="flex flex-col text-2xl font-bold  md:text-5xl lg:text-6xl">
            <span className="pt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
              UNE EXPÉRIENCE OPTIMISÉE
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

          <div className="rounded-xl mb-6 bg-gray-300 h-[2px] max-w-[30rem] w-full "></div>

          <Link
            to="/"
            className="flex group btn items-center text-neutral-700 border-[1px] border-neutral-700 rounded-full transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white"
          >
            <span className=" px-4 py-2  font-bold ">COMMENCER</span>
            <svg
              viewBox="0 0 46 16"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
              className="-translate-x-2 h-[10px] w-[30px] fill-neutral-700 transition-all duration-300 ease-out group-hover:scale-x-105 group-hover:fill-white"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div data-aos="fade-right" data-aos-duration="1000">
            <StaticImage
              src="../images/Images1-min.svg"
              alt="travail"
              placeholder="none"
              backgroundColor="white"
            />
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              DES SITES WEB ULTRA RAPIDES
            </h2>
            <p>
              Avec l'utilisation des dernières technologies pour offrir des
              sites web ultra rapides.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:order-2"
          >
            <StaticImage
              src="../images/Images2-min.svg"
              alt="travail"
              placeholder="none"
              backgroundColor="white"
            />
          </div>
          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              PLATEFORME (CMS)FACILE À UTILISER
            </h2>
            <p>
              Pour l'intégration de contenus personnalisés sur le site Web
              (article de blogue, landing pages, promotions du mois, textes SEO
              et plus).
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div data-aos="fade-right" data-aos-duration="1000">
            <StaticImage
              src="../images/Images3-min.svg"
              alt="travail"
              placeholder="none"
              backgroundColor="white"
            />
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              DEMANDES WEB DE QUALITÉ (LEADS)
            </h2>
            <p>
              Offrant un taux de conversion plus élevé et un coût d'acquisition
              plus bas.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:order-2"
          >
            <StaticImage
              src="../images/Imags-min.svg"
              alt="travail"
              placeholder="none"
              backgroundColor="white"
            />
          </div>
          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              CONCEPTION GRAPHIQUE ET EXPÉRIENCE EN LIGNE OPTIMALE
            </h2>
            <p>Pour faciliter la navigation.</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div data-aos="fade-right" data-aos-duration="1000">
            <StaticImage
              src="../images/Images4-min.svg"
              alt="travail"
              placeholder="none"
              backgroundColor="white"
            />
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              MISES A JOUR AUTOMATISÉE DES PROGRAMMES ET PROMOTIONS
            </h2>
            <p>Des manifacturiers.</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:order-2"
          >
            <StaticImage
              src="../images/Images5-min.svg"
              alt="travail"
              placeholder="none"
              backgroundColor="white"
            />
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              OPTIMISATION SEO
            </h2>
            <p>
              Incluant la gestion de la taille des images, des balises, des
              donnees structurées, des sitemaps, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
