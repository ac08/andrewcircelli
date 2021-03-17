import React from "react"

import {
  ProjectContent,
  ProjectDetail,
  ProjectWrapper,
} from "./CodingTemplate.style"

const ProjectTemplate = ({ title, desc, links }) => {
  return (
    <ProjectWrapper>
      <ProjectContent>
        <ProjectDetail>
          <div className="project__detail-container">
            <h2>{title}</h2>
            <p>{desc}</p>
            {links}
          </div>
        </ProjectDetail>
      </ProjectContent>
    </ProjectWrapper>
  )
}

export default ProjectTemplate
