const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID
    email: String
    password: String
    todos: [ToDo]
  }

  type ToDo {
    id: ID
    title: String
    description: String
    isCompleted: Boolean
    dateAdded: DateTime
    dateCompleted: String
    timeframe: String
    author: User
    authorId: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    singleUser(id: ID!): User
    getTodo(todoId: ID!): ToDo
    getTodos(completeOrNot: Boolean!): [ToDo]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean
    addTodo(title: String!, description: String, timeframe: String!): User
    completeTodo(todoId: ID!): ToDo
    deleteTodo(todoId: ID!): User
  }
`;

module.exports = typeDefs;
