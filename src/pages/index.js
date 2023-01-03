import * as React from "react";
import Divider from "../components/Divider";
import Hero from "../components/Hero";

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
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
