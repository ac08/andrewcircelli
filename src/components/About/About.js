import React from "react"

import { Hidden } from "react-grid-system"
import SkewBg from "@common/SkewBg"
import PageHeader from "@common/PageHeader"

import { AboutWrapper, AboutInfo } from "./About.style"

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <Hidden lg md xs sm>
        <SkewBg />
      </Hidden>
      <AboutInfo>
        <p>
          Hi, I'm Andrew Circelli, a motivated full-stack developer from Ohio,
          currently working Cerner Corporation as a lead technical consultant.
          Because I am of my JavaScript background I am drawn to the MERN stack
          architecture. Now, I am especialy focused what I can do with React.js
          and GraphQL.
          <br />
          <br />
          At cerner, I am part of a small team working to introduce and
          implement cerner's integration service and application, HealtheCRM.
          The solution provides a prebuilt mapping to connect cerner's big data
          and intelligence platform with salesforce CRM.
        </p>
      </AboutInfo>
    </AboutWrapper>
  )
}

export default About
