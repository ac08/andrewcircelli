import React, { useContext } from "react"
import styled from "styled-components"
import ThemeToggleContext from "@components/Layout/ThemeToggleContext"

// toggleWrapper from internet community
const ToggleWrapper = styled.div`
  input[type="checkbox"] {
    height: 100%;
    width: 100%;
    visibility: visible;
  }

  .button-cover,
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .button {
    position: relative;
    top: 50%;
    width: 74px;
    height: 30px;
    overflow: hidden;
  }

  .button.r,
  .button.r .layer {
    border-radius: 100px;
  }

  .button.b2 {
    border-radius: 2px;
  }

  .checkbox {
    position: relative;
    width: 100% !important;
    height: 100% !important;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    transition-delay: 1s;
    transition: 0.2s ease all;
    z-index: 1;
    background-color: ${p => p.theme.accentColor};
  }

  /* buttom-theme */
  #button-theme .knobs:before {
    content: "SAFE";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 30px;
    height: 5px;
    color: #fff;
    font-size: 8px;
    font-weight: bold;
    text-align: center;
    line-height: 0.5;
    padding: 9px 4px;
    background-color: ${p => p.theme.primaryColor};
    border-radius: 30px;
  }

  #button-theme .checkbox:checked + .knobs:before {
    content: "LIGHT";
    left: 32px;
    background-color: ${p => p.theme.primaryColor};
  }

  #button-theme .knobs,
  #button-theme .knobs:before,
  #button-theme .layer {
    transition-delay: 1s;
    transition: 0.2s ease all;
  }
`

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeToggleContext)

  return (
    <ToggleWrapper>
      <div className="button r" id="button-theme">
        <input
          className="checkbox"
          type="checkbox"
          checked={theme === "dark" ? true : false}
          onChange={toggleTheme}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </ToggleWrapper>
  )
}

export default ToggleSwitch
