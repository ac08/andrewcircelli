import React from "react"

import Link from "gatsby-link"
import styled from "styled-components"
import { BsCalendar } from "react-icons/bs"

const PostWrapper = styled.article`
  overflow: auto;
  margin-bottom: 70px;
  /* margin-top: 100px; */
  padding: 30px 30px;
  border-top: 5px solid
    ${p => (p.theme.dark ? p.theme.accentColor : p.theme.primaryColor)};
  border-radius: 10px;
  box-shadow: ${p => p.theme.shadowSmall};
  background-color: ${p => p.theme.secondaryColor};

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 13px;
    color: gray;
  }
`
export const BlogDate = ({ date }) => (
  <span style={{ fontSize: 13, color: "gray" }}>
    <span>
      <BsCalendar color="gray" />
      &nbsp;&nbsp;{date}
    </span>
    &nbsp;&nbsp;&nbsp;
  </span>
)

const BlogCard = ({ date, title, excerpt, slug, tags }) => {
  return (
    <Link to={slug}>
      <PostWrapper>
        <BlogDate date={date} />
        <h2>{title}</h2>
        <p>{excerpt}</p>
        {tags.map((tag, i) => (
          <span key={i} style={{ marginRight: "1.2rem" }}>
            {tag}
          </span>
        ))}
      </PostWrapper>
    </Link>
  )
}

export default BlogCard
