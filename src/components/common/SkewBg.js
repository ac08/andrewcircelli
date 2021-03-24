import styled from "styled-components"

const SkewBg = styled.div`
  border-radius: 10px;
  position: absolute;
  opacity: 0.7;
  right: 0;
  margin-right: 10px;
  width: 70%;
  min-height: 250px;
  background: ${p =>
    p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};
`

export default SkewBg
