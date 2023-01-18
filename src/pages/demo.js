import * as React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Contact from "../components/Contact";
import Dividerleftthree from "../components/Dividerleftthree";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Layout from "../components/layout";
import Seo from "../components/seo";

const SecondPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <Header backgroundColor="bg-white" />
      <Form />
      <Dividerleftthree />
      <Contact />
      <Footer />
    </Layout>
  );
};

export const Head = () => <Seo title="DÉMO" />;

export default SecondPage;
