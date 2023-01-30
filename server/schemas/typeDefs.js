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
    timeframe: String
    author: User
    authorId: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    singleUser(id: ID!): User
    getTodo(todoId: ID!): ToDo
    getAllTodos(userId: ID!): User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean
    addTodo(title: String!, description: String): ToDo
    completeTodo(todoId: ID!): ToDo
  }
`;

module.exports = typeDefs;
