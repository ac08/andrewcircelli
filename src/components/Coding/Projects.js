import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Button, { IconButton } from "@common/Button"

import ProjectTemplate from "./CodingTemplate"
import { ProjectLinks } from "./CodingTemplate.style"

const Projects = () => {
  const projects = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "projects" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                excerpt
                info {
                  demo
                  iframe
                  src
                  tech
                }
                type
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      {projects.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectTemplate
          key={node.id}
          title={node.frontmatter.title}
          desc={node.frontmatter.excerpt}
          links={
            <ProjectLinks>
              <Button target="__blank" as="a" href={node.frontmatter.info.demo}>
                Live Demo
              </Button>
              <IconButton
                label="github"
                icon="github"
                href={node.frontmatter.info.src}
              />
            </ProjectLinks>
          }
        />
      ))}
    </>
  )
}

export default Projects
