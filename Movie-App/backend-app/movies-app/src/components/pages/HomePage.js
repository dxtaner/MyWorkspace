import React, { Component } from "react";
import ActorList from "../ActorList";

class HomePage extends Component {
  state = {
    actors: [
      {
        name: "Clint Eastwood",
        description:
          "Clint Eastwood was born May 31, 1930 in San Francisco, the son of Clinton Eastwood",
        photo:
          "https://m.media-amazon.com/images/M/MV5BOGFlOTM2OWMtNjI1Ny00ZGQ0LTg4NjYtODUxNjYwNjE0MmFkXkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_SY1000_CR0,0,827,1000_AL_.jpg",
      },
      {
        name: "Ingrid Bergman",
        description:
          "Ingrid Bergman was one of the greatest actresses from Hollywood's lamented Golden Era.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTYzMTgzMTIwOV5BMl5BanBnXkFtZTYwNzI5MzI2._V1_.jpg",
      },
      {
        name: "Al Pacino",
        description: "One of the greatest actors in all of film history.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_.jpg",
      },
      {
        name: "Naomi Watts",
        description:
          "Naomi Ellen Watts was born on September 28, 1968 in Shoreham, England.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BMjIzMjY1NTA4OF5BMl5BanBnXkFtZTcwNjk3MDYwOQ@@._V1_SY1000_CR0,0,667,1000_AL_.jpg",
      },
      {
        name: "Tom Hanks",
        description:
          "Thomas Jeffrey Hanks was born in Concord, California, to Janet Marylyn (Frager), a hospital worker, and Amos Mefford Hanks, an itinerant cook.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_SY1000_CR0,0,691,1000_AL_.jpg",
      },
      {
        name: "Natalie Portman",
        description:
          "Natalie Portman is the first person born in the 1980s to have won the Academy Award for Best Actress.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_SY1000_SX746_AL_.jpg",
      },
      {
        name: "Morgan Freeman",
        description:
          "With an authoritative voice and calm demeanor, this ever popular American actor has grown into one of the most respected figures in modern US cinema.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg",
      },
      {
        name: "Jennifer Connelly",
        description:
          "Jennifer Connelly was born in the Catskill Mountains, New York, to Ilene (Schuman), a dealer of antiques, and Gerard Connelly, a clothing manufacturer.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BOTczNTgzODYyMF5BMl5BanBnXkFtZTcwNjk4ODk4Mw@@._V1_.jpg",
      },
      {
        name: "Marlon Brando",
        description:
          "Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem.",
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg",
      },
      {
        name: "Cate Blanchett",
        description:
          "Cate Blanchett is an Australian actress and theater director known for her diverse roles in various film genres.",
        photo:
          "data:image/jpeg;base64,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",
      },
      {
        name: "Leonardo DiCaprio",
        description:
          "Leonardo DiCaprio is an American actor, film producer, and environmental activist. He has been nominated for six Academy Awards and has won one.",
        photo:
          "data:image/jpeg;base64,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",
      },
      {
        name: "Emma Stone",
        description:
          "Emma Stone is an American actress. She has won various accolades, including an Academy Award, a BAFTA Award, and a Golden Globe Award.",
        photo:
          "data:image/jpeg;base64,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",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <h2 className="ui center aligned header">Actors & Actresses</h2>

        <ActorList actors={this.state.actors} />
      </div>
    );
  }
}

export default HomePage;
