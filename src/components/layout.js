import * as React from "react";
import AOS from "aos";
import Rellax from "rellax";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    new Rellax(".animate", {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
