import React from "react";
import { Link } from "gatsby";
import Icon1 from "../images/Icons.svg";
import Icon2 from "../images/Icons2.svg";
import Icon3 from "../images/Icons3.svg";
import Icon4 from "../images/Icons4.svg";
import Icon5 from "../images/Icons5.svg";

const Produits = () => {
  return (
    <section className="bg-neutral-900">
      <div className="flex flex-col px-6 py-6 max-w-[1200px] mx-auto">
        <h1
          data-aos="fade-up"
          className="flex pb-10 text-center text-lime-300 z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl"
        >
          NOS PRODUITS
        </h1>

        <ul className="text-white grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img
              data-aos="fade-left"
              data-aos-mirror="true"
              src={Icon1}
              alt="icon1"
            />
            <h2 className="font-bold py-3">
              SITES WEB DE CONCESSIONAIRES AUTOS
            </h2>
            <p className="text-sm">Suivant les normes des manifacturiers</p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img
              data-aos="fade-left"
              data-aos-mirror="true"
              data-aos-delay="50"
              src={Icon2}
              alt="icon2"
            />
            <h2 className="font-bold py-3">MODULE D'ACHAT EN LIGNE COMPLET</h2>
            <p className="text-sm">
              Incluant les accessoires, garanties, assurances et depots
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img
              data-aos="fade-left"
              data-aos-mirror="true"
              data-aos-delay="100"
              src={Icon3}
              alt="icon3"
            />
            <h2 className="font-bold py-3">
              GESTIONNAIRE D'INVENTAIRE D'OCCASIONS
            </h2>
            <p className="text-sm">
              (Eval Auto) Incluant la syndication vers les plateformes les plus
              populaires (Kijiji, Cargurus, Otogo, AutoTraders, etc)
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img
              data-aos="fade-left"
              data-aos-mirror="true"
              data-aos-delay="150"
              src={Icon4}
              alt="icon4"
            />
            <h2 className="font-bold py-3">
              MODULE DE PUBLICATION AUTOMATISEE
            </h2>
            <p className="text-sm">
              Sur Facebook (Carrousel et Marketplace) et Google (Merchant
              center) pour vehicules d'occasion.
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img
              data-aos="fade-left"
              data-aos-mirror="true"
              data-aos-delay="200"
              src={Icon5}
              alt="icon5"
            />
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
