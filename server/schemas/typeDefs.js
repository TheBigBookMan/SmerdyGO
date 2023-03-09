const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID
    email: String
    password: String
    todos: [ToDo]
    goals: [Goal]
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

  type Goal {
    id: ID
    author: User
    authorId: String
    title: String
    measurement: String
    amount: Int
    description: String
    category: String
    subGoals: [SubGoal]
  }

  type SubGoal {
    id: ID
    goal: Goal
    goalId: String
    title: String
    amount: Int
    dateCompleted: String
    dateToComplete: String
    description: String
    reward: String
    editMode: Boolean
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
    getGoal(goalId: ID!): Goal
    getGoals: [Goal]
    getSubGoal(subGoalId: ID!): SubGoal
    getSubGoals(goalId: ID!): [SubGoal]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: Boolean
    addTodo(title: String!, description: String, timeframe: String!): User
    completeTodo(todoId: ID!): ToDo
    deleteTodo(todoId: ID!): User
    addGoal(
      title: String!
      measurement: String
      amount: Int!
      description: String
      category: String!
    ): User
    addSubGoal(
      goalId: ID!
      title: String!
      amount: Int!
      dateToComplete: String
      description: String
      reward: String
    ): Goal
    subGoalEdit(subGoalId: ID!): SubGoal
  }
`;

module.exports = typeDefs;
