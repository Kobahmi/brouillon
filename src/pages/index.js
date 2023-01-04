import * as React from "react";
import Divider from "../components/Divider";
import Dividerleft from "../components/Dividerleft";
import Dividerlefttwo from "../components/Dividerlefttwo";
import Dividerright from "../components/Dividerright";
import Dividerrighttwo from "../components/Dividerrighttwo";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Integration from "../components/Integration";
import Integre from "../components/Integre";
import Layout from "../components/layout";
import Produits from "../components/Produits";
import Rapide from "../components/Rapide";
import Seo from "../components/seo";
import Syndication from "../components/Syndication";

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
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
