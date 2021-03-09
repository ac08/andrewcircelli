import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { themelight, themedark, themedarkblue } from "./theme";

import Wrapper from "@common/Wrapper/";
import Navbar from "./Navbar/Navbar";

import GlobalStyle from "@src/styles/GlobalStyle";
import ThemeToggleContext from "./ThemeToggleContext";

import { setConfiguration } from "react-grid-system";
setConfiguration({ breakpoints: [576, 769, 992, 1200] });

const RootWrapper = styled(Wrapper)`
  margin-top: 100px;
  margin-bottom: 50px;
  min-height: calc(100vh - 125px);

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 50px;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={themelight}>
      <>
        <GlobalStyle />

        <ThemeToggleContext.Provider value={{ themelight }}>
          <Navbar />
        </ThemeToggleContext.Provider>

        <RootWrapper>{children}</RootWrapper>
      </>
    </ThemeProvider>
  );
};

export default Layout;
