import { css } from "styled-components"

const blogstyles = css`
  .markdown-content {
    ${p => p.theme.spacing.sectionTopBottom};
    margin-top: 50px;
    line-height: 1.58;

    a {
      word-break: break-word;
    }
    p {
      font-size: 18px;
      margin: 1em auto;
    }
    blockquote p {
      margin: 0;
    }

    iframe {
      border-radius: 5px;
      border: none;
      height: 500px !important;
    }

    figure {
      margin: 50px 0;
    }
    figcaption {
      margin: 10px 0;
      font-style: italic;
      font-size: 12px;
      text-align: center;
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 50px;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 2.1em 0 0.5em 0;
      color: ${p => p.theme.primaryColor};

      &:hover .gatsby-remark-autolink svg {
        opacity: 1;
      }
    }

    ul {
      font-family: ${p => p.theme.secondaryFontFamily};
      font-size: 18px;
      padding: 0 17px;
      line-height: 170%;
      text-indent: 0px;
      list-style: disc;
    }

    .gatsby-remark-autolink svg {
      scale: 1.3;
      margin-left: 20px;
      margin-right: 5px;
      fill: ${p => p.theme.primaryColor};
      visibility: visible !important;
      opacity: 0.5;
    }
  }
`
export default blogstyles
