import React from "react"
import svgBlob from "@src/static/blob.svg"
import { Hidden } from "react-grid-system"

import IconLink from "@common/IconLink"
import PageHeader from "@common/PageHeader"
import Flex from "@common/Flex"
import Button from "@common/Button"

import { Card, CardIcon, CardText, CardTitle } from "@common/Card"
import { HomeCard } from "./HomeCard"
import { HomeWrapper, Intro } from "./Home.style"
import { CgStack } from "react-icons/cg"
import { VscDebugDisconnect } from "react-icons/vsc"
import { BsCodeSlash } from "react-icons/bs"

const ThingsImDoing = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>{<CgStack icon="stack" />}</CardIcon>
      <CardTitle>Stacking</CardTitle>
      <CardText>
        I am capable on the back-end, but am currently building data-driven,
        React-packed, full stack web applications.
      </CardText>
    </Card>
    <Card>
      <CardIcon>{<BsCodeSlash icon="code" />}</CardIcon>
      <CardTitle>Learning</CardTitle>
      <CardText>
        I am currently learning more about React.js, JamStack, and Amazon Alexa
        Skills.
      </CardText>
    </Card>
    <Card>
      <CardIcon>{<VscDebugDisconnect icon="connect" />}</CardIcon>
      <CardTitle>Connecting</CardTitle>
      <CardText>
        Integrating big data and intelligence with consumer engagement insights.
      </CardText>
    </Card>
  </Flex>
)

const Home = () => {
  return (
    <HomeWrapper id="home">
      <Hidden md xs sm>
        <img className="svg-blob" src={svgBlob} alt="blob"></img>
      </Hidden>

      <Intro>
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>ANDREW CIRCELLI</h1>
          <p className="adjust">CREATIVE FULL STACK DEVELOPER</p>
          <div className="home__actions">
            <Button
              className="action"
              as="a"
              href="//drive.google.com/file/d/1mscBpJULP4QuO1DBw2ujcGOhGlBOCM-L/view?usp=sharing"
            >
              Download Resume
            </Button>
            <div className="home__social">
              <IconLink
                label="github"
                icon="github"
                href="//github.com/andrewcircelli"
              />
              <IconLink
                label="linkedin"
                icon="linkedin"
                href="//linkedin.com/in/andrewcircelli/"
              />
              <IconLink
                label="salesforce"
                icon="salesforce"
                href="//trailblazer.me/id/andrewcircelli"
              />
            </div>
          </div>
        </div>
        <HomeCard />
      </Intro>

      {/* Things I'm Doing */}
      <PageHeader style={{ marginBottom: 30 }}>Things I'm Doing</PageHeader>
      <ThingsImDoing />
    </HomeWrapper>
  )
}

export default Home
