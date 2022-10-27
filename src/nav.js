import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Zone 1
          </NavLink>
          <NavLink to='/events' activeStyle>
            Zone 2
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Zone 3
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;