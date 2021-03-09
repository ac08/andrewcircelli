import styled from "styled-components";
import Wrapper from "@common/Wrapper";

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;

  height: 60px;
  width: 100vw;

  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: ${(props) => props.theme.shadowSmall};
  z-index: 1000;

  .logo {
    margin-right: auto;
    cursor: pointer;
  }
  .grid-icon {
    height: 20px;
    width: 20px;
  }
`;

export const NavItems = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  transition: 0.2s;
`;

export const NavItem = styled.li`
  margin-left: 30px;
  display: inline-block;
  text-align: center;

  a {
    color: ${(p) =>
      p.theme.dark ? p.theme.primaryText : p.theme.primaryColor};
  }

  a:hover {
    cursor: pointer;
    color: ${(p) =>
      p.theme.dark ? p.theme.primaryColor : p.theme.primaryText};
  }
`;

export const NavContent = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
