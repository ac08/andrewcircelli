import styled from "styled-components"

export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: calc(80vh - 100px);
  ${props => props.theme.spacing.sectionBottom};

  .home__text {
    @media ${props => props.theme.media.tablet} {
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    a.action {
      display: block;
      margin: 30px 0;
    }
  }

  h1 {
    margin: -4px 0;
    font-size: 2.5rem;
    font-weight: 900;
  }

  p {
    font-family: ${props => props.theme.fontFamily};
  }
  .adjust {
    font-size: 1.06rem;
  }

  .home__actions {
    width: max-content;
  }
  .home__social {
    color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: space-between;
    font-size: 30px;
  }

  @media ${props => props.theme.media.tablet} {
    justify-content: space-between;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 140px;

    h1 {
      margin: 6px 0;
      line-height: 100%;
    }
  }
`

export const HomeWrapper = styled.section`
  margin-bottom: 100px;
  margin-top: 125px;

  .svg-blob {
    width: 65%;
    position: absolute;
    top: -350px;
    right: -200px;
    z-index: -1;
  }
`
