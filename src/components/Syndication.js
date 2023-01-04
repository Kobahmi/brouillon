import React from "react";
import Image from "../images/Mockup.webp";
import { Link } from "gatsby";

const Syndication = () => {
  return (
    <section className="bg-gradient-to-t from-[#30F9FC] to-lime-300">
      <div className="flex flex-col max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-10 items-center p-10 xl:flex-row">
          <img
            className="object-cover h-full w-full"
            src={Image}
            loading="lazy"
            alt="travail"
          />

          <div className="flex flex-col gap-4 border-gray-700 border-solid border-l-2 pl-10 py-6">
            <h2 className="flex flex-col">
              <span className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                INTEGRATION
              </span>
              <span className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                SYNDICATION
              </span>
            </h2>
            <p>
              Notre portfolio inclus deja plusieurs marques de vehicules neufs:
            </p>

            <ul className="list-disc ml-6">
              <li>
                <span className="font-bold">Facebook</span> <br />{" "}
                <span>(Carroussel et Marketplace)</span>
              </li>
              <li>
                <span className="font-bold">Canadian Black Book</span> <br />
                (Evaluation de vehicule d'echange)
              </li>
              <li className="flex flex-col">
                <span className="font-bold">DealerCorp</span>{" "}
                <span>(gestionaire d'inventaire)</span>
              </li>
            </ul>

            <p>
              Vous voulez ajouter une Syndication? <br />
              Ecrivez-nous et nous vous contacterons!
            </p>

            <Link
              to="/"
              className="text-black bg-white z-20 mr-auto mt-8 rounded-full px-6 py-2 brightness-100 hover:brightness-90 duration-100 ease-in "
            >
              DEMANDER UNE DEMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syndication;
