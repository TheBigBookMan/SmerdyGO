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

// * SubGoal related
export const ADD_SUB_GOAL = gql`
  mutation AddSubGoal($goalId: ID!) {
    addSubGoal(goalId: $goalId) {
      id
      goalId
      editMode
    }
  }
`;

export const GET_SUB_GOAL = gql`
  query GetSubGoal($subGoalId: ID!) {
    getSubGoal(subGoalId: $subGoalId) {
      id
      goalId
      title
      amount
      dateCompleted
      dateToComplete
      description
      reward
      editMode
    }
  }
`;

export const GET_SUB_GOALS = gql`
  query GetSubGoals($goalId: ID!) {
    getSubGoals(goalId: $goalId) {
      id
      goalId
      title
      amount
      dateCompleted
      dateToComplete
      description
      reward
      editMode
    }
  }
`;

export const UPDATE_SUB_GOAL = gql`
  mutation UpdateSubGoal(
    $goalId: ID!
    $title: String!
    $amount: Int!
    $dateToComplete: String
    $description: String
    $reward: String
  ) {
    addSubGoal(
      goalId: $goalId
      title: $title
      amount: $amount
      dateToComplete: $dateToComplete
      description: $description
      reward: $reward
    ) {
      id
      subGoals {
        id
        title
      }
    }
  }
`;

export const SUB_GOAL_EDIT = gql`
  mutation SubGoalEdit($subGoalId: ID!) {
    subGoalEdit(subGoalId: $subGoalId) {
      id
      goalId
      title
      amount
      dateCompleted
      dateToComplete
      description
      reward
      editMode
    }
  }
`;
