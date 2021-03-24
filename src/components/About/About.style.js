import styled from "styled-components"

export const AboutWrapper = styled.section`
  margin-bottom: 200px;
`

export const AboutInfo = styled.article`
  display: flex;
  justify-content: flex-end;

  /* > div:first-child {
    margin-right: 10%;
  } */

  p {
    max-width: 50%;
    color: black;
  }

  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
    margin-top: 120px;
  }
`
