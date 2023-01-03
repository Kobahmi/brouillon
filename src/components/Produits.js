import React from "react";
import Icon1 from "../images/Icons.svg";
import Icon2 from "../images/Icons2.svg";
import Icon3 from "../images/Icons3.svg";
import Icon4 from "../images/Icons4.svg";
import Icon5 from "../images/Icons5.svg";

const Produits = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-col px-6 max-w-[1200px] mx-auto">
        <h1 className="flex py-4 text-center text-lime-300 z-20 flex-col text-xl font-bold sm:text-2xl md:text-5xl lg:text-6xl">
          NOS PRODUITS
        </h1>

        <ul className="text-white grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img src={Icon1} alt="icon1" />
            <h3 className="font-bold py-3">
              SITES WEB DE CONCESSIONAIRES AUTOS
            </h3>
            <p className="text-sm">Suivant les normes des manifacturiers</p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img src={Icon2} alt="icon2" />
            <h3 className="font-bold py-3">MODULE D'ACHAT EN LIGNE COMPLET</h3>
            <p className="text-sm">
              Incluant les accessoires, garanties, assurances et depots
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img src={Icon3} alt="icon3" />
            <h3 className="font-bold py-3">
              GESTIONNAIRE D'INVENTAIRE D'OCCASIONS
            </h3>
            <p className="text-sm">
              (Eval Auto) Incluant la syndication vers les plateformes les plus
              populaires (Kijiji, Cargurus, Otogo, AutoTraders, etc)
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img src={Icon4} alt="icon4" />
            <h3 className="font-bold py-3">
              MODULE DE PUBLICATION AUTOMATISEE
            </h3>
            <p className="text-sm">
              Sur Facebook (Carrousel et Marketplace) et Google (Merchant
              center) pour vehicules d'occasion.
            </p>
          </li>

          <li className="border-gray-700 border-solid border-l-2 px-6 py-4">
            <img src={Icon5} alt="icon5" />
            <h3 className="font-bold py-3">SITES WEB D'OCCASIONS</h3>
            <p className="text-sm">
              De style marketplace reunissant l'inventaire de plusieurs
              concessions dans un meme site. Strategie incontournable pour les
              groupes automobiles.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Produits;
