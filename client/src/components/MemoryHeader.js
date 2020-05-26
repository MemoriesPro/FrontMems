import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderNav = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
background-color: black;
height: 45px;
a{
  color:red;
  padding: 0 10px;
}
@media screen and (max-width: 800px) {
  height: 35px;
  
}
@media screen and (max-width: 650px) {
  flex-direction: column;
  height: 65px;
  padding-bottom: 5px;
}
`

const MemoryHeader = () => {
  return (
    <div>
    <HeaderNav>
    <NavLink to="#page-top">Back to Top</NavLink>
    <NavLink to="/register">Register</NavLink>
    </HeaderNav> 
    </div>
  )
}

export default MemoryHeader;