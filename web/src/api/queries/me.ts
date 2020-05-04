import gql from "graphql-tag";
import { QueryHookOptions, useQuery } from "@apollo/react-hooks";
import { Me } from "./types/Me";

const ME = gql`
  query Me {
    me {
      id
      email
    }
  }
`;

const useMe = (options?: QueryHookOptions<Me, any>) =>
  useQuery<Me, any>(ME, options);

export default useMe;
