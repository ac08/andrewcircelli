import React, { useState } from "react";

import { HomeCardWrapper, ClassCardWrapper } from "./HomeCard.style";

// internet function for repeating sting elements
function repeatString(str, count) {
  let maxCount = str.length * count;
  count = Math.floor(Math.log(count) / Math.log(2));
  while (count) {
    str += str;
    count--;
  }
  str += str.substring(0, maxCount - str.length);
  return str;
}

export const ClassCard = () => {
  const [text, setText] = useState(`new Date().getFullYear() - 1992;`);
  const age = new Date().getFullYear() - 1992 - 1;
  const changeText = () => {
    let space = repeatString(" ", 54);
    setText(age + ";" + space);
  };
  return (
    <ClassCardWrapper>
      <pre>
        1&nbsp;&nbsp;class <b>Person</b> {"{"}
      </pre>
      <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {"{"}</pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
        <b>Andrew Circelli</b>";
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
        <b>DEV</b>", "<b>STYLE</b>"];
      </pre>
      <pre onClick={changeText}>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = {text}
      </pre>
      <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"}"}</pre>
      <pre>7&nbsp;&nbsp;{"}"}</pre>
    </ClassCardWrapper>
  );
};

export const HomeCard = () => {
  return (
    <HomeCardWrapper>
      <ClassCard />
    </HomeCardWrapper>
  );
};
