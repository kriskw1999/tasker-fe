import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { PropsWithChildren } from "react";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
