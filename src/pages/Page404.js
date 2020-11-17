import React, { useEffect } from "react";
import { Container } from "reactstrap";
import Headers from "../components/Headers";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";

const Page404 = (props) => {
  const location = useLocation();
  useEffect(() => {
    document.title = "404 Not Found Page";
  }, []);
  return (
    <div>
      <Headers />
      <Hero />
      <Container>
        <section>
          <h1>
            404 <code>{location.pathname}</code> for does not exist, please
            search again
          </h1>
        </section>
      </Container>
    </div>
  );
};

export default Page404;
