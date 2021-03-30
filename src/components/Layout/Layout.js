import React from "react"
import styled from "styled-components"

import Wrapper from "@common/Wrapper/"
import Navbar from "./Navbar/Navbar"

import { ThemeProvider } from "styled-components"
import { themelight, themedark } from "./theme"
import GlobalStyle from "@src/styles/GlobalStyle"
import ThemeToggleContext from "./ThemeToggleContext"

import { useSafeMode } from "@src/hooks/useSafeMode"

import { setConfiguration } from "react-grid-system"
setConfiguration({ breakpoints: [576, 769, 992, 1200] })

const RootWrapper = styled(Wrapper)`
  margin-top: 100px;
  margin-bottom: 50px;
  min-height: calc(100vh - 125px);

  @media ${props => props.theme.media.tablet} {
    margin-top: 50px;
  }
`

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useSafeMode()

  const currentTheme = theme === "light" ? themelight : themedark

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyle />
        <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
        </ThemeToggleContext.Provider>

        <RootWrapper>{children}</RootWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
