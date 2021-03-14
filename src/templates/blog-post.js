import React from "react"
import { graphql } from "gatsby"
import { BsCalendar } from "react-icons/bs"

import Layout from "@components/Layout/Layout"

export const BlogDate = ({ date }) => (
  <span style={{ fontSize: 13, color: "gray" }}>
    <span>
      <BsCalendar color="gray" />
      &nbsp;&nbsp;{date}
    </span>
    &nbsp;&nbsp;&nbsp;
  </span>
)

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
