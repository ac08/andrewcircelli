import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "@components/Layout/Layout"

// import BlogCard from "@components/Blog/BlogCard"
// import BlogLayout from "@components/Blog/BlogLayout"

const BlogPage = () => {
  const blogposts = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY", locale: "en")
                tags
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
        <>
          <h1>{node.frontmatter.title}</h1>
          <h1>{node.frontmatter.date}</h1>
        </>
      ))}
      {/* <BlogLayout>
        {blogposts.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        ))}
      </BlogLayout> */}
    </Layout>
  )
}

export default BlogPage
