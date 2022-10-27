
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" onClick={()=>console.log("saaaaaaaaaaaaaaaa-----sds")} href="/">
        Zone 1
      </a>
      <a className="menu-item" href="/salads">
      Zone 2
      </a>
      <a className="menu-item" href="/pizzas">
      Zone 3
      </a>
      <a className="menu-item" href="/desserts">
      Zone 4
      </a>
    </Menu>
  );
};