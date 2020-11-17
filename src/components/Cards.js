import React from "react";
import CardItem from "./CardItem";
import { Row, Col } from "reactstrap";

const Cards = (props) => {
  const { source } = props;
  return (
    <section className="mt-2">
      <Row>
        {source
          ? source.items.map((news) => (
              <Col sm="4" key={Math.random()}>
                <CardItem
                  key={Math.random()}
                  title={news.title}
                  publishedAt={news.publishedAt}
                  photo={news.urlToImage}
                  url={news.url}
                />
              </Col>
            ))
          : null}
      </Row>
    </section>
  );
};

export default Cards;
