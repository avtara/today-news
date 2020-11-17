import React from "react";
import { Button } from "reactstrap";

const SmallButton = (props) => {
  return (
    <Button color={props.color} size="sm">
      {props.name}
    </Button>
  );
};

export default SmallButton;
