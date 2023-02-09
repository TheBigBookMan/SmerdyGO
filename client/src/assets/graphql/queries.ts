import { gql } from "@apollo/client";

// * User related
export const SIGNUP = gql`
  mutation AddUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        id
        email
        password
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        password
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

// * Todos related
export const ADD_TODO = gql`
  mutation AddToDo($title: String!, $description: String, $timeframe: String!) {
    addTodo(title: $title, description: $description, timeframe: $timeframe) {
      todos {
        title
        description
        isCompleted
        dateAdded
        dateCompleted
        timeframe
      }
      id
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos($completeOrNot: Boolean!) {
    getTodos(completeOrNot: $completeOrNot) {
      id
      title
      description
      isCompleted
      dateAdded
      dateCompleted
      timeframe
    }
  }
`;

export const COMPLETE_TODO = gql`
  mutation CompleteTodo($todoId: ID!) {
    completeTodo(todoId: $todoId) {
      title
      isCompleted
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($todoId: ID!) {
    deleteTodo(todoId: $todoId) {
      id
    }
  }
`;

// * Goals related
export const GET_GOALS = gql`
  query GetGoals {
    getGoals {
      id
      title
      measurement
      amount
      description
      category
      subGoals {
        subgoal
        dateCompleted
        dateToComplete
        description
        reward
      }
    }
  }
`;

export const ADD_GOAL = gql`
  mutation AddGoal(
    $title: String!
    $amount: Int!
    $category: String!
    $measurement: String
    $description: String
  ) {
    addGoal(
      title: $title
      amount: $amount
      category: $category
      measurement: $measurement
      description: $description
    ) {
      goals {
        id
      }
    }
  }
`;

export const ADD_AMOUNT_SUBGOAL = gql`
  mutation AddAmountSubGoal($goalId: ID!, $numSubGoals: Int!) {
    addAmountSubGoal(goalId: $goalId, numSubGoals: $numSubGoals) {
      subGoals {
        subgoal
        dateCompleted
        dateToComplete
        description
        reward
      }
    }
  }
`;
