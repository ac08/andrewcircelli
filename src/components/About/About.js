import React from "react"

import SkewBg from "@common/SkewBg"
import PageHeader from "@common/PageHeader"

import { AboutWrapper, AboutInfo } from "./About.style"

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <p>
          Hi, I'm Andrew Circelli, a motivated full-stack developer from Ohio,
          currently working at{" "}
          <a className="about__link" href="www.cerner.com">
            cerner technology
          </a>{" "}
          as a Solution Engineer, Consultant. I am a certified Full Stack
          Software Developer from Case Western Reserve University. I am
          committed to mastering the MERN technology stack, with a focus now on
          React.js.
          <br />
          <br />
          I'm also a self-taught, and certified Salesforce Administrator and App
          Builder. At Cerner, I am part of a small team building and
          implementing a new partnership product with Salesforce.
        </p>
      </AboutInfo>
    </AboutWrapper>
  )
}

export default About
