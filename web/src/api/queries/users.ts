import gql from "graphql-tag";
import { QueryHookOptions, useQuery } from "@apollo/react-hooks";
import { Users } from "./types/Users";

const USERS = gql`
  query Users {
    users {
      id
      email
    }
  }
`;

const useUsers = (options?: QueryHookOptions<Users, any>) =>
  useQuery<Users, any>(USERS, options);

export default useUsers;
