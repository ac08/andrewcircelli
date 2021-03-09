import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";

import Link from "gatsby-link";
import { Link as SLink } from "react-scroll";

import { NavItems, NavItem } from "./Navbar.style";

import NavLinks from "./NavLinks";
// import ToggleSwitch from "@common/ToggleSwitch";

const NavDesktop = () => {
  return (
    <>
      <SLink className="logo" smooth offset={-100} hashSpy={true} to="home">
        <BsGrid1X2Fill className="grid-icon" />
      </SLink>

      <nav>
        <NavItems>
          <NavLinks NavItem={NavItem} />
          <NavItem>
            <Link to="/blog">blog</Link>
          </NavItem>
        </NavItems>
      </nav>
    </>
  );
};

export default NavDesktop;
