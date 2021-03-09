import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";

import PageHeader from "@common/PageHeader";

import SmallProjects from "./SmallProjects";
import JsProjects from "./JsProjects";

import ProjectTemplate from "./ProjectTemplate";
import { ProjectLinks, ProjectPreview, Tags } from "./ProjectTemplate.style";

const ProjectsWrapper = styled.section`
  ${(props) => props.theme.spacing.sectionBottom};
`;
const Projects = () => {
  const projects = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { posttype: { eq: "case-studies" } } }
          sort: { fields: fields___fileIndex, order: ASC }
        ) {
          edges {
            node {
              id
              frontmatter {
                demo
                excerpt
                iframe
                src
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  return (
    <ProjectsWrapper id="projects" style={{ marginBottom: 100 }}>
      <PageHeader>My Projects</PageHeader>

      {projects.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectTemplate
          key={node.id}
          title={node.frontmatter.title}
          desc={node.frontmatter.excerpt}
          links={
            <ProjectLinks>
              <Button as={Link} to={node.fields.slug}>
                Case Study
              </Button>
              <Button target="__blank" as="a" href={node.frontmatter.demo}>
                Live Demo
              </Button>
              <IconButton
                label="github"
                icon={["fab", "github"]}
                href={node.frontmatter.src}
              />
            </ProjectLinks>
          }
          preview={
            <ProjectPreview>
              <IFrame
                livedemo={!!node.frontmatter.iframe.match("codepen")}
                src={node.frontmatter.iframe}
              />
              <Tags>
                <DiJavascript1 size="25px" />
                <FaReact size="25px" />
                <FaNodeJs size="25px" />
              </Tags>
            </ProjectPreview>
          }
        />
      ))}

      <SmallProjects />
      <JsProjects />
    </ProjectsWrapper>
  );
};

export default Projects;
