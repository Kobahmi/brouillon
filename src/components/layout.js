import * as React from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Layout = ({ children }) => {
  let AOS;
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
