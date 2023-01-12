import React from "react";

const Form = () => {
  return (
    <section
      id="contact"
      className="flex flex-col text-neutral-700  items-center pt-[6rem] pb-10"
    >
      <h1 className="flex flex-col pb-6 z-20 text-neutral-700 text-2xl font-bold  md:text-3xl ">
        DEMANDEZ VOTRE DÉMO
      </h1>

      <form className="flex flex-col bg-gradient-to-t from-[#30F9FC] to-lime-300 gap-4 max-w-3xl mx-auto px-10 py-16 w-full md:rounded-xl">
        <div className="flex flex-col gap-1 w-full md:w-[40rem]">
          <label htmlFor="nomComplet">Nom complet</label>
          <input
            className="border-2 border-gray-200 p-2 rounded"
            id="nom"
            type="text"
            placeholder="Votre nom"
          />
        </div>

        <div className="flex flex-col gap-1 w-full md:w-[40rem]">
          <label htmlFor="prénom">Prénom</label>
          <input
            className="border-2 border-gray-200 p-2 rounded"
            id="prenom"
            type="text"
            placeholder="Votre Prénom"
          />
        </div>

        <div className="flex flex-col gap-1 w-full md:w-[40rem]">
          <label htmlFor="votreCourriel">Votre courriel</label>
          <input
            className="border-2 border-gray-200 p-2 rounded"
            id="entreprise"
            type="text"
            placeholder="Votre courriel"
          />
        </div>

        <div className="flex flex-col gap-1 w-full md:w-[40rem]">
          <label htmlFor="votreTéléphone">Votre numéros téléphone</label>
          <input
            className="border-2 border-gray-200 p-2 rounded"
            id="entreprise"
            type="text"
            placeholder="Numéros téléphone"
          />
        </div>

        <div className="flex flex-col gap-1 w-full md:w-[40rem]">
          <label htmlFor="votreMessage">Votre message</label>
          <textarea
            className="border-2 border-gray-200 p-2 rounded"
            id="message"
            type="text"
            placeholder="Votre message"
          ></textarea>
        </div>

        <button
          id="send"
          aria-label="send"
          type="button"
          className="mt-10 mx-auto"
          to="/"
        >
          <span className="border-[1px] px-4 py-3 border-neutral-700 rounded-full font-bold text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-700 hover:text-white mr-6">
            ENVOYER
          </span>
        </button>
      </form>
    </section>
  );
};

export default Form;
