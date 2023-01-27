const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID
    username: String
    password: String
    
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {

  }

  type Mutation {

  }
`;

module.exports = typeDefs;
