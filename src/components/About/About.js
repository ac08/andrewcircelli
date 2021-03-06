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
          At cerner, I am part of a small team working to introduce and
          implement cerner's integration service and application, HealtheCRM.
          The solution provides a prebuilt mapping to connect cerner's big data
          and intelligence platform with salesforce CRM.
          <br />
          <br />
          Because of my JavaScript background I am drawn to the MERN stack
          architecture. Now, I am especialy focused on what I can do with
          React.js, GraphQL, and the Amazon Alexa Platform.
        </p>
      </AboutInfo>
    </AboutWrapper>
  )
}

export default About
