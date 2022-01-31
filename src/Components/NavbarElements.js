import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: black;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: rem;
  z-index: 12;
`;
export const MyImage = styled.img `
  height : 100 px; 
  width : 100px;
  display: flex;
`
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: red;
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
