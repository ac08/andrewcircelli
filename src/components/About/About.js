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
          currently working at as a lead technical consultant.I am committed to
          mastering the MERN technology stack, with a focus now on React.js.
          <br />
          <br />
          At Cerner, I implement, manage, and develop the Cerner and Salesforce
          partnership product and connector service, HealtheCRM. I work to
          design and configure the integration platform service to connect
          healthcare client’s health information and intelligence from the
          Cerner Big Data and insights platform, HealtheIntent, with consumer
          engagement insights from Salesforce Health and Marketing Cloud.
        </p>
      </AboutInfo>
    </AboutWrapper>
  )
}

export default About
