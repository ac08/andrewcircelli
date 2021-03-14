import { css } from "styled-components"

const prismjsstyles = css`
  blockquote {
    border-left: 5px solid ${p => p.theme.accentColor};
    padding: 15px;
    margin: 20px 0;
    border-radius: 3px;
  }

  .gatsby-highlight {
    /* actual code */
    code {
      background-color: transparent;
      font-size: 1em; /* 14px */
      left: 15px;
    }

    /* another parent wrapper */
    pre[class*="language-"] {
      &:before {
        background: rgb(97, 218, 251);
        color: #232129;
        font-size: 0.75rem;
        line-height: 1;
        position: absolute;
        right: 15px;
        text-transform: uppercase;
        top: 0px;
        border-radius: 0px 0px 4px 4px;
        padding: 0.25rem 0.5rem;
      }

      &.line-numbers {
        padding-left: 2em;
        /* 1.1em for 1px overflow when using line-heighlight */
        padding-right: 1.1em;
        line-height: 170%;
        font-size: 14px;

        .line-numbers-rows {
          right: calc(100% - 40px);
          background-color: #25293e;
          border: none;
          top: 14px;
        }
      }
    }
  }
`

export default prismjsstyles
