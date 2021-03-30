import styled, { css } from "styled-components"

export const HomeCardWrapper = styled.div`
  position: relative;

  @media ${props => props.theme.media.tablet} {
    /* releated to "things i love" section bug */
    margin-top: 25px;
  }
`

const hover = css`
  &:hover {
    transform: scale(1.05);
    transition: 0.1s;
  }
`

export const ClassCardWrapper = styled.div`
  ${hover}
  padding: 30px 35px;
  border-radius: 10px;
  background-color: ${props => props.theme.secondaryColor};
  box-shadow: ${props => props.theme.shadowSmall};

  pre {
    font-size: 0.8rem;
    font-family: ${props => props.theme.fontFamily};
    color: ${p => (p.theme.dark ? p.theme.primaryText : p.theme.primaryColor)};
  }
`
