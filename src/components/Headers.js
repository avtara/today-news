import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Container
} from "reactstrap";
import NavButton from "./NavButton";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <b>Today News</b>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavButton to="search/lifestyle" name="lifestyle" />
              <NavButton to="search/bitcoin" name="Bitcoin" />
              <NavButton to="search/covid-19" name="COVID-19" />
              <NavButton to="search/vaccine" name="Vaccine" />
              <NavButton to="search/corona" name="Corona" />
              <NavButton to="search/indonesia" name="Indonesia" />
            </Nav>
            <NavbarText></NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
