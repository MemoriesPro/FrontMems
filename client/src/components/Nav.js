import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const HeaderNav = styled.div`
display: flex;
width: 99%;
justify-content: center;
align-items: center;
background-color: #19171785;
justify-content: space-around;
box-shadow: 7px 7px 3px #00000094;
height: 45px;
a{
 color:red;
 padding: 0 10px;
 text-decoration: none;
 color: white;
 font-size: 1.1rem;
 font-weight: 600;
 font-family: 'Noto Serif TC', serif;
 &:hover {
   color: black;
 }
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
const Nav = () => {
 return (
   <div>
   <HeaderNav>
   <NavLink to="/home">Home</NavLink>
   </HeaderNav>
   </div>
 )
}
export default Nav;