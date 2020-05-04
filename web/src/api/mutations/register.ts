import gql from "graphql-tag";
import { useMutation, MutationHookOptions } from "@apollo/react-hooks";
import { Register, RegisterVariables } from "./types/Register";

const REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

const useRegister = (
  options?: MutationHookOptions<Register, RegisterVariables>
) => useMutation<Register, RegisterVariables>(REGISTER, options);

export default useRegister;
