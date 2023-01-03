import * as React from "react";
import Divider from "../components/Divider";
import Hero from "../components/Hero";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Divider />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
