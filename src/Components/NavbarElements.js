import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  justify-content: space-between;
  padding: 0 2rem;
  display: flex;
  background: black;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
  padding: rem;
  z-index: 12;
  top: 0;
  left: 0;
  right: 0;
`;

export const MyImage = styled(Link)`
padding: 1rem 0;
color: white;
text-decoration: none;
font-weight: 800;
font-size: 1.7rem;

span {
  font-weight: 300;
  font-size: 1.3rem;
}
&:hover {
  color: #268c41;
}
cursor: pointer;
`;

export const NavLink = styled(Link)`
font-family: Verdana, sans-serif;
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: #268c41;
}
&:hover {
  color: #268c41;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: white;
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
`;
