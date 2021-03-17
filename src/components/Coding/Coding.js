import React from "react"
import styled from "styled-components"

import PageHeader from "@common/PageHeader"

import LearningXP from "./LearningXP"
import Projects from "./Projects"

const CodingWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
`
const Coding = () => {
  return (
    <CodingWrapper id="coding">
      <PageHeader>My Projects and Learning Experiences</PageHeader>
      <Projects />
      <LearningXP />
    </CodingWrapper>
  )
}

export default Coding
