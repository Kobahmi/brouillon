import * as React from "react";
import Contact from "../components/Contact";
import Dividerleftthree from "../components/Dividerleftthree";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Layout from "../components/layout";
import Seo from "../components/seo";

const SecondPage = () => (
  <Layout>
    <Form />
    <Dividerleftthree />
    <Contact />
    <Footer />
  </Layout>
);

export const Head = () => <Seo title="DÉMO" />;

export default SecondPage;
