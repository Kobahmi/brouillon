import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Produits = () => {
  return (
    <section className="bg-neutral-900">
      <div className="flex flex-col px-6 py-6 max-w-7xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center py-16 text-2xl font-bold md:text-5xl lg:text-6xl"
        >
          <span className="bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#30F9FC] to-lime-300">
            PRODUITS
          </span>
        </h1>

        <ul className="text-white grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <div data-aos="fade-left">
              <StaticImage
                src="../images/Icons-min.svg"
                alt="icon1"
                placeholder="rgb(23 23 23)"
              />
            </div>
            <h2 className="font-bold py-3">
              SITES WEB DE CONCESSIONAIRES AUTOS
            </h2>
            <p className="text-sm">Suivant les normes des manifacturiers</p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <div data-aos="fade-left" data-aos-delay="50">
              <StaticImage
                src="../images/Icons2-min.svg"
                alt="icon2"
                placeholder="rgb(23 23 23)"
              />
            </div>
            <h2 className="font-bold py-3">MODULE D'ACHAT EN LIGNE COMPLET</h2>
            <p className="text-sm">
              Incluant les accessoires, garanties, assurances et depots
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <div data-aos="fade-left" data-aos-delay="100">
              <StaticImage
                src="../images/Icons3-min.svg"
                alt="icon3"
                placeholder="rgb(23 23 23)"
              />
            </div>
            <h2 className="font-bold py-3">
              GESTIONNAIRE D'INVENTAIRE D'OCCASIONS
            </h2>
            <p className="text-sm">
              (Eval Auto) Incluant la syndication vers les plateformes les plus
              populaires (Kijiji, Cargurus, Otogo, AutoTraders, etc)
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <div data-aos="fade-left" data-aos-delay="150">
              <StaticImage
                src="../images/Icons4-min.svg"
                alt="icon4"
                placeholder="rgb(23 23 23)"
              />
            </div>
            <h2 className="font-bold py-3">
              MODULE DE PUBLICATION AUTOMATISEE
            </h2>
            <p className="text-sm">
              Sur Facebook (Carrousel et Marketplace) et Google (Merchant
              center) pour vehicules d'occasion.
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <div data-aos="fade-left" data-aos-delay="200">
              <StaticImage
                src="../images/Icons5-min.svg"
                alt="icon5"
                placeholder="rgb(23 23 23)"
              />
            </div>
            <h2 className="font-bold py-3">SITES WEB D'OCCASIONS</h2>
            <p className="text-sm">
              De style marketplace reunissant l'inventaire de plusieurs
              concessions dans un meme site. Strategie incontournable pour les
              groupes automobiles.
            </p>
          </li>
        </ul>
        <Link className="mt-10 mx-auto" to="/">
          <span className="border-[1px] px-4 py-3 border-white rounded-full font-bold text-white transition duration-300 ease-in-out hover:bg-white hover:text-black mr-6">
            DEMANDER UNE DEMO
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Produits;
