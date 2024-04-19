const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { languages, continents, countries } = require("./data.js");

const typeDefs = gql`
  type Language {
    name: String
    countries: [Country]
  }

  type Country {
    name: String
    continent: Continent
    language: Language
  }

  enum Continent {
    ASIA
    EUROPE
    AFRICA
    NORTH_AMERICA
    SOUTH_AMERICA
    AUSTRALIA
    ANTARCTICA
  }

  type Query {
    languages: [Language]
    continents: [Continent]
    countries: [Country]
  }
`;

const resolvers = {
  Query: {
    languages: () => languages,
    continents: () => continents,
    countries: () => countries,
  },
  Language: {
    countries: (parent) =>
      countries.filter((country) => country.language === parent.name),
  },
  Country: {
    continent: (parent) =>
      continents.find((continent) => continent.countries.includes(parent.name)),
    language: (parent) =>
      languages.find((language) => language.countries.includes(parent.name)),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
