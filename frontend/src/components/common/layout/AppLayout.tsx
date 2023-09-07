import { AppLayoutProps } from "@/helpers/types/layout";
import React from "react";
import Footer from "./Footer";
import useMediaQuery from "./useMediaQuey";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div className= {` appLayout ${className}`}>
      {isDesktop ? <Navbar /> : <MobileNav />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
