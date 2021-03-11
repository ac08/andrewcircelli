import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaSalesforce } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const IconLink = ({ className, href, label, icon }) => {
  return (
    <a target="__blank" title={label} className={className} href={href}>
      {icon === "github" ? (
        <FaGithub />
      ) : icon === "salesforce" ? (
        <FaSalesforce />
      ) : (
        <FaLinkedin />
      )}
    </a>
  )
}

export default IconLink
