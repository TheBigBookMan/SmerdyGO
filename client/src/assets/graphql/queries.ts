import { gql } from "@apollo/client";

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
      title
      description
      isCompleted
      dateAdded
      dateCompleted
      timeframe
    }
  }
`;
