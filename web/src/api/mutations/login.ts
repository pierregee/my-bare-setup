import { useMutation, MutationHookOptions } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Login, LoginVariables } from "./types/Login";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;

const useLogin = (options?: MutationHookOptions<Login, LoginVariables>) =>
  useMutation<Login, LoginVariables>(LOGIN, options);

export default useLogin;
