import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ children, activePage }) => {
  return (
    <section>
      <Head>
        <title>{activePage} -- Galleria</title>
      </Head>
      <Navigation activePage={activePage} />
      <div>{children}</div>
    </section>
  );
};

export default Layout;
