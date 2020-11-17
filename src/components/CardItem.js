import React from "react";
import { Card, Button, CardTitle, CardText, CardImg } from "reactstrap";
import { NavLink } from "react-router-dom";

const CardItem = (props) => {
  return (
    <Card body className="mt-2">
      <CardImg top width="100%" src={props.photo} alt="Card image cap" />
      <CardTitle>{props.title}</CardTitle>
      <CardText>
        {new Date(props.publishedAt).toLocaleDateString("en-CA", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </CardText>
      <a href={props.url}>
        <Button color="primary">Go to resource</Button>
      </a>
    </Card>
  );
};

export default CardItem;
