import { gql } from "@apollo/client";

export const SIGNUP = `
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

export const LOGIN = ``;

export const LOGOUT = ``;
