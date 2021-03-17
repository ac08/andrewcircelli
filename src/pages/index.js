import React from "react"

import Layout from "@components/Layout/Layout"

import About from "@components/About/About"
import Home from "@components/Home/Home"
import Skills from "@components/Skills/Skills"
import Coding from "@components/Coding/Coding"

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Skills />
    <Coding />
  </Layout>
)

export default IndexPage
