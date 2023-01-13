import * as React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
