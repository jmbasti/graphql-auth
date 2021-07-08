import { gql } from "@apollo/client";

// LOGIN
export const LOGIN = gql`
  mutation LogIn($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
// SIGNUP
export const SIGNUP = gql`
  mutation SignUp($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;
// LOGOUT
export const LOGOUT = gql`
  mutation Logout {
    logout {
      id
      email
    }
  }
`;
