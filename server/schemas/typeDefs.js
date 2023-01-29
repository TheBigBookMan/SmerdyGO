const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID
    email: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    singleUser(id: ID!): User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean
  }
`;

module.exports = typeDefs;
