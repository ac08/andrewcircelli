import React from "react"
import { graphql } from "gatsby"
import { BlogDate } from "@components/Blog/BlogCard"

import Layout from "@components/Layout/Layout"

const BlogPost = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const { html, id } = data.markdownRemark

  return (
    <Layout>
      <BlogDate date={date} />
      <h1>{title}</h1>
      <hr />

      <article
        id={id}
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
