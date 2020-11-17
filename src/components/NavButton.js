import React from "react";
import { NavItem, NavLink } from "reactstrap";

const NavButton = (props) => {
  return (
    <NavItem>
      <NavLink href={`/${props.to}`}>{props.name}</NavLink>
    </NavItem>
  );
};

export default NavButton;
