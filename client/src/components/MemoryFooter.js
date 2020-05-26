import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterDiv = styled.div`
position: fixed;
width: 100%;
display: flex;
justify-content: center;
padding: 5 10px;
align-items: center;
background-color: black;
a {
  color:red
  padding: 0 10px;
}
`

const MemoryFooter = () => {
  return (
    <div>
      <FooterDiv>
        <NavLink to="#page-top">Back to Top</NavLink>
        <NavLink to="/register">Register</NavLink>
      </FooterDiv>
    </div>
  )
}

export default MemoryFooter;