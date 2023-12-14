import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <Container className="not-found-container">
      <Segment textAlign="center" padded="very" raised>
        <Header as="h2" color="red">
          Not Found
        </Header>
        <p className="not-found-message">
          Sorry, the page you are looking for does not exist.
        </p>
      </Segment>
    </Container>
  );
};

export default NotFoundPage;
