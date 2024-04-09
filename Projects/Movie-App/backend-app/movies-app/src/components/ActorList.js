import React from "react";
import { Card, Image } from "semantic-ui-react";

const ActorList = ({ actors }) => {
  return (
    <div className="actor-list">
      <Card.Group centered>
        {actors.map((actor, index) => (
          <Card key={index} className="custom-card">
            <Image
              src={actor.photo}
              alt={actor.name}
              wrapped
              ui={false}
              className="custom-image"
            />
            <Card.Content>
              <Card.Header className="custom-header">{actor.name}</Card.Header>
              <Card.Description className="custom-description">
                {actor.description}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default ActorList;
