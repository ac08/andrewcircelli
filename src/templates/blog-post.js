import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout/Layout"

const BlogPost = ({ data, pageContext }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const { html, excerpt, id } = data.markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <article
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "en")
        title
      }
    }
  }
`

export default BlogPost
