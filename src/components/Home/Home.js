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
import { GiPaintBrush } from "react-icons/gi"
import { BsCodeSlash } from "react-icons/bs"

const ThingsImDoing = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>{<CgStack icon="stack" />}</CardIcon>
      <CardTitle>FullStack</CardTitle>
      <CardText>
        I am capable on the backEnd, but am currently building data-driven,
        React-packed, fullStack web applications.
      </CardText>
    </Card>
    <Card>
      <CardIcon>{<BsCodeSlash icon="code" />}</CardIcon>
      <CardTitle>Learning</CardTitle>
      <CardText>
        I am currently learning more about React.js and JamStack.
      </CardText>
    </Card>
    <Card>
      <CardIcon>{<GiPaintBrush icon="paint" />}</CardIcon>
      <CardTitle>Looking</CardTitle>
      <CardText>
        I am looking to see how I can merge my skills on the Salesforce Platform
        with my FullStack toolset.
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
          <p className="adjust">CREATIVE FULL-STACK DEVELOPER</p>
          <div className="home__actions">
            <Button className="action" as="a" href="#">
              Download Resume
            </Button>
            <div className="home__social">
              <IconLink label="github" icon="github" href="//github.com/ac08" />
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
