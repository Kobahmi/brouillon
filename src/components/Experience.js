import React from "react";
import { Link } from "gatsby";
import Image1 from "../images/Layer1.webp";
import Image2 from "../images/Layer2.svg";

const Experience = () => {
  return (
    <section className="bg-white pt-6 pb-[8.5rem]">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col justify-center items-center text-center px-6">
          <h1 className="flex flex-col text-2xl font-bold  md:text-5xl lg:text-6xl">
            <span className="bg-clip-text  text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
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
            className="text-black z-20 mx-auto mt-8 bg-gradient-to-tr from-[#30F9FC] to-lime-300 rounded-full px-6 py-2 brightness-90 hover:brightness-100 duration-200 ease-in"
          >
            COMMENCER
          </Link>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className="object-cover h-full w-full"
              src={Image1}
              alt="travail"
            />
          </div>

          <div className="animate hidden flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:flex">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              DES SITES WEBS ULTRA RAPIDES
            </h2>
            <p>
              Avec l'utilisation des dernieres technologies pour offrir des
              sites web ultra rapides.
            </p>
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:hidden">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              DES SITES WEBS ULTRA RAPIDES
            </h2>
            <p>
              Avec l'utilisation des dernieres technologies pour offrir des
              sites web ultra rapides.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div className="lg:order-2">
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              className="object-cover h-full w-full "
              src={Image2}
              alt="travail"
            />
          </div>
          <div className="animate hidden flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10 lg:flex">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              PLATEFORME (CMS)FACILE A UTILISER
            </h2>
            <p>
              Pour l'integration de contenus personnalises sur le site Web
              (article de blogue, landing pages, promotions du mois, textes SEO
              et plus).
            </p>
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10 lg:hidden">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              PLATEFORME (CMS)FACILE A UTILISER
            </h2>
            <p>
              Pour l'integration de contenus personnalises sur le site Web
              (article de blogue, landing pages, promotions du mois, textes SEO
              et plus).
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className="object-cover w-full h-full"
              src={Image1}
              alt="travail"
            />
          </div>

          <div className="animate hidden flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:flex">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              DEMANDES WEB DE QUALITE (LEADS)
            </h2>
            <p>
              Offrant un taux de conversion plus eleve et un cout d'acquisition
              plus bas.
            </p>
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:hidden">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              DEMANDES WEB DE QUALITE (LEADS)
            </h2>
            <p>
              Offrant un taux de conversion plus eleve et un cout d'acquisition
              plus bas.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div className="lg:order-2">
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              className="object-cover h-full w-full"
              src={Image2}
              alt="travail"
            />
          </div>
          <div className="animate hidden flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10 lg:flex">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              CONCEPTION GRAPHIQUE ET EXPERIENCE EN LIGNE OPTIMALE
            </h2>
            <p>Pour facilite la navigation.</p>
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10 lg:hidden">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              CONCEPTION GRAPHIQUE ET EXPERIENCE EN LIGNE OPTIMALE
            </h2>
            <p>Pour facilite la navigation.</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className="object-cover h-full w-full"
              src={Image1}
              alt="travail"
            />
          </div>

          <div className="animate hidden flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:flex">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              MISES A JOUR AUTOMATISEE DES PROGRAMMES ET PROMOTIONS
            </h2>
            <p>Des manifacturiers.</p>
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:hidden">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              MISES A JOUR AUTOMATISEE DES PROGRAMMES ET PROMOTIONS
            </h2>
            <p>Des manifacturiers.</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div className="lg:order-2">
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              className="object-cover w-full h-full"
              src={Image2}
              alt="travail"
            />
          </div>

          <div className="animate hidden flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10 lg:flex">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              OPTIMISATION SEO
            </h2>
            <p>
              Incluant la gestion de la taille des images, des balises, des
              donnees structurees, des sitemaps, etc.
            </p>
          </div>

          <div className="flex flex-col max-w-[25rem] gap-4 border-gray-300 border-solid border-l-2 pl-10 py-6 lg:order-1 md:border-l-0 md:border-r-2 md:pl-0 md:pr-10 lg:hidden">
            <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              OPTIMISATION SEO
            </h2>
            <p>
              Incluant la gestion de la taille des images, des balises, des
              donnees structurees, des sitemaps, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
