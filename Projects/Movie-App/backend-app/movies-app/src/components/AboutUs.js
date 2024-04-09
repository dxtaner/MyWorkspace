import React from "react";
import { Container, Segment, Header, Icon } from "semantic-ui-react";

const AboutUs = () => {
  return (
    <Container style={{ margin: "2em" }}>
      <Segment padded="very" textAlign="center">
        <Header as="h2" icon>
          <Icon name="users" />
          About Us
          <Header.Subheader>
            We are passionate about movies and technology.
          </Header.Subheader>
        </Header>
        <p>
          Welcome to Movies-App! We strive to provide a platform where movie
          enthusiasts can explore, discover, and share their favorite movies.
          Our team is dedicated to creating a seamless and enjoyable
          movie-watching experience for everyone.
        </p>
      </Segment>
    </Container>
  );
};

export default AboutUs;
