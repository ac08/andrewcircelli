import styled from "styled-components"

export const AboutWrapper = styled.section`
  margin-bottom: 200px;
`

export const AboutInfo = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 200px;

  > div:first-child {
    margin-right: 10%;
  }

  p {
    color: black;
  }

  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
    margin-top: 120px;
  }
`
