import * as React from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  let AOS;
  useEffect(() => {
    AOS = require("aos");
    AOS.init();
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
