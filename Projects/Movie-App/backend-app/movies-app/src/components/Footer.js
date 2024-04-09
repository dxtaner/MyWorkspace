import React from "react";
import { Container, List, Segment, Icon } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Segment inverted className="segment-footer" vertical>
      <Container textAlign="center" stackable="true">
        <List horizontal inverted divided link size="big">
          <List.Item
            as="a"
            href="https://github.com/dxtaner"
            target="_blank"
            rel="noopener noreferrer"
            className="list-item-link">
            <Icon name="github" size="large" className="icon" />
          </List.Item>
          <List.Item
            as="a"
            href="https://www.linkedin.com/in/tanerozer16/"
            target="_blank"
            rel="noopener noreferrer"
            className="list-item-link">
            <Icon name="linkedin" size="large" className="icon" />
          </List.Item>
          <List.Item
            as="a"
            href="mailto:tanerozer16@gmail.com"
            className="list-item-link">
            <Icon name="mail" size="large" className="icon" />
          </List.Item>
        </List>
        <p className="footer-text">Software Developer | Bursa, Turkey</p>
        <p className="footer-text">
          © {currentYear} dxtaner. All rights reserved.
        </p>
      </Container>
    </Segment>
  );
};

export default Footer;
