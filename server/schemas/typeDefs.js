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
    subgoal: Int
    dateCompleted: String
    dateToComplete: String
    description: String
    reward: String
  }

  input SubGoals {
    subgoal: Int
    dateCompleted: String
    dateToComplete: String
    description: String
    reward: String
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
    getSubGoal(subGoalId: ID): SubGoal
    getSubGoals: [SubGoal]
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
    addAmountSubGoal(goalId: ID!, numSubGoals: Int!): Goal
    addSubGoal(goalId: ID!, subGoalId: ID!): Goal
  }
`;

module.exports = typeDefs;
