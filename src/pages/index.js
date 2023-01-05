import * as React from "react";
import Automatisation from "../components/Automatisation";
import Contact from "../components/Contact";
import Divider from "../components/Divider";
import Dividerleft from "../components/Dividerleft";
import Dividerleftthree from "../components/Dividerleftthree";
import Dividerlefttwo from "../components/Dividerlefttwo";
import Dividerright from "../components/Dividerright";
import Dividerrightthree from "../components/Dividerrightthree";
import Dividerrighttwo from "../components/Dividerrighttwo";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Integration from "../components/Integration";
import Integre from "../components/Integre";
import Layout from "../components/layout";
import Produits from "../components/Produits";
import Rapide from "../components/Rapide";
import Seo from "../components/seo";
import Syndication from "../components/Syndication";
import loadable from "@loadable/component";
const Experience = loadable(() => import("../components/Experience"), {
  fallback: <div>Loading...</div>,
});

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Divider />
      <Rapide />
      <Produits />
      <Dividerleft />
      <Integration />
      <Dividerright />
      <Experience />
      <Dividerlefttwo />
      <Integre />
      <Dividerrighttwo />
      <Syndication />
      <Dividerrightthree />
      <Automatisation />
      <Dividerleftthree />
      <Contact />
      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
