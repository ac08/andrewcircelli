import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "@components/Layout/Layout"

import BlogCard from "@components/Blog/BlogCard"

const BlogPage = () => {
  const blogposts = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY", locale: "en")
                tags
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
    <Layout>
      {blogposts.allMarkdownRemark.edges.map(({ node }) => (
        <BlogCard
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
        />
      ))}
    </Layout>
  )
}

export default BlogPage
