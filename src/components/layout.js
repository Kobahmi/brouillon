import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
