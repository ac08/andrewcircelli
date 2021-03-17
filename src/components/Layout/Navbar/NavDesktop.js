import React from "react"
import { GiWaterDrop } from "react-icons/gi"

import Link from "gatsby-link"
import { Link as SLink } from "react-scroll"

import { NavItems, NavItem } from "./Navbar.style"

import NavLinks from "./NavLinks"
// import ToggleSwitch from "@common/ToggleSwitch";

const NavDesktop = () => {
  return (
    <>
      <SLink className="logo" smooth offset={-100} hashSpy={true} to="home">
        <GiWaterDrop className="grid-icon" />
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
  )
}

export default NavDesktop
