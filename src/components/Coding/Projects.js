import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { DiMongodb, DiJavascript1 } from "react-icons/di"

import PageHeader from "@common/PageHeader"

import SmallProjects from "./SmallProjects"
// import JsProjects from "./JsProjects";

import ProjectTemplate from "./ProjectTemplate"
import { ProjectLinks, ProjectPreview, Tags } from "./ProjectTemplate.style"

const ProjectsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
`
const Projects = () => {
  return (
    <ProjectsWrapper id="projects" style={{ marginBottom: 100 }}>
      <PageHeader>My Projects</PageHeader>
      <SmallProjects />
    </ProjectsWrapper>
  )
}

export default Projects
