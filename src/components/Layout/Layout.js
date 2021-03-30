import React, { useState } from "react"
import styled from "styled-components"

import { ThemeProvider } from "styled-components"
import { themelight, themedark } from "./theme"

import Wrapper from "@common/Wrapper/"
import Navbar from "./Navbar/Navbar"

import GlobalStyle from "@src/styles/GlobalStyle"
import ThemeToggleContext from "./ThemeToggleContext"

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
  const stored = localStorage.getItem("isDarkMode")
  const [isDarkMode, setIsDarkMode] = useState(stored === "true" ? true : false)
  return (
    <ThemeProvider theme={isDarkMode ? themedark : themelight}>
      <>
        <GlobalStyle />
        <ThemeToggleContext.Provider>
          <Navbar />
        </ThemeToggleContext.Provider>

        <RootWrapper>
          <button
            onClick={() => {
              setIsDarkMode(!isDarkMode)
              localStorage.setItem("isDarkMode", !isDarkMode)
            }}
          >
            ToggleThemeHere
          </button>
          {children}
        </RootWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
