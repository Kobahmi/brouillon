import * as React from "react";
import Divider from "../components/Divider";
import Dividerleft from "../components/Dividerleft";
import Dividerright from "../components/Dividerright";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Integration from "../components/Integration";
import Layout from "../components/layout";
import Produits from "../components/Produits";
import Rapide from "../components/Rapide";
import Seo from "../components/seo";

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
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
