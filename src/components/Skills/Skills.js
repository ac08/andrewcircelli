import React from "react"
import styled from "styled-components"

import PageHeader from "@src/components/common/PageHeader"
import Flex from "@src/components/common/Flex"
import { Hidden } from "react-grid-system"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { DiMongodb, DiJavascript1 } from "react-icons/di"

import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const SkillsWrapper = styled.section`
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${props => props.theme.media.tablet} {
      padding: 10px 0;
    }

    .icons {
      color: ${props => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${props => props.theme.accentColor};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
    }
    z-index: -1;
  }
`

const WordClouds = () => {
  return (
    <Parallax
      y={["-350px", "-150px"]}
      slowerScrollRate={true}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      <p style={{ top: 50, left: "100%", fontSize: 23 }}>Node.js</p>
      <p style={{ top: 50, left: 0, fontSize: 25 }}>ES6</p>
      <p style={{ top: 200, left: -60, fontSize: 14 }}>HTML5</p>
      <p style={{ top: 20, left: "35%", fontSize: 18 }}>Express</p>
      <p style={{ top: 200, left: "50%", fontSize: 18 }}>REST</p>
      <p style={{ top: 40, left: "75%", fontSize: 12 }}>MySQL</p>
      <p style={{ top: 380, left: "85%", fontSize: 18 }}>MongoDB</p>
      <p style={{ top: 320, left: "65%", fontSize: 18 }}>Gatsby</p>
      <p style={{ top: 350, left: 150, fontSize: 14 }}>GraphQL</p>
      <p style={{ top: 120, left: "22%", fontSize: 12 }}>Bootstrap</p>
    </Parallax>
  )
}

const Skills = () => (
  <SkillsWrapper>
    <ParallaxProvider>
      <PageHeader>My Skillsets</PageHeader>

      <Flex className="skill__icons" justify="space-around" align="center">
        <DiJavascript1 className="icons" size="75px" />
        <DiMongodb className="icons" size="75px" />
        <FaReact className="icons" size="75px" />
        <FaNodeJs className="icons" size="75px" />
      </Flex>

      <Hidden md xs sm>
        <WordClouds />
      </Hidden>
    </ParallaxProvider>
  </SkillsWrapper>
)

export default Skills
