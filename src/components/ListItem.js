import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";

const ListItem = (props) => {
  return (
    <Card className="mt-2">
      <Row className="no-gutters">
        <Col sm="4">
          <CardImg
            width="100%"
            src={props.photo}
            alt="Card image cap"
            className="img-square-wrapper"
          />
        </Col>
        <Col sm="auto">
          <CardBody>
            <CardTitle tag="h6">{props.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {new Date(props.publishedAt).toLocaleDateString("en-CA", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </CardSubtitle>
            <CardText></CardText>
            <a href={props.url}>
              <Button color="primary">Go to resource</Button>
            </a>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default ListItem;
