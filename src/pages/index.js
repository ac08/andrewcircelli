import React from "react";

import Layout from "@components/Layout/Layout";

import About from "@components/About/About";
import Home from "@components/Home/Home";
import Skills from "@components/Skills/Skills";

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Skills />
  </Layout>
);

export default IndexPage;
