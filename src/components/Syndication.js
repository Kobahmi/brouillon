import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Syndication = () => {
  return (
    <section className="bg-gradient-to-t from-[#30F9FC] to-lime-300">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 items-center p-10 lg:flex-row">
          <div data-aos="fade-up" data-aos-duration="1000">
            <StaticImage
              src="../images/Mockup.webp"
              alt="travail"
              placeholder="blurred"
            />
          </div>

          <div className="flex flex-col gap-4  pl-10 py-6">
            <h2 className="flex flex-col">
              <span className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                INTÉGRATION
              </span>
              <span className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                SYNDICATION
              </span>
            </h2>

            <ul className="list-disc ml-6">
              <li>
                <span className="font-bold">Facebook</span> <br />{" "}
                <span>(Carroussel et Marketplace)</span>
              </li>
              <li>
                <span className="font-bold">Canadian Black Book</span> <br />
                (Évaluation de vehicule d'echange)
              </li>
              <li>
                <span className="font-bold">DealerCorp</span>
                <br /> <span>(Gestionaire d'inventaire)</span>
              </li>
            </ul>

            <p>
              Vous voulez ajouter une Syndication? <br />
              Écrivez-nous et nous l'ajouterons!
            </p>

            <Link
              to="/"
              className="text-black bg-white z-20 mr-auto mt-8 rounded-full px-6 py-2 brightness-100 hover:brightness-90 duration-100 ease-in "
            >
              DEMANDER UNE DÉMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syndication;
