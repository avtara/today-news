import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Jumbotron,
  Container,
  Button
} from "reactstrap";
import { BsFillCursorFill, BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Hero = (props) => {
  const [value, setValue] = useState(props.value);
  const history = useHistory();
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage: `linear-gradient(to bottom right, #C6FFDD, #f7797d)`
        }}
      >
        <Container>
          <div className="row">
            <div className="col-sm">
              <h3>Search any article</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  history.push(`/search/${value}`);
                  window.location.reload(true);
                }}
              >
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      <i>
                        <BsSearch />
                      </i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder=""
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "black"
                      }}
                    >
                      <i>
                        <BsFillCursorFill />
                        {" Search"}
                      </i>
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </div>
            <div className="col-sm" style={{ justifyContent: "end" }}></div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;
