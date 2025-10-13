import { gql } from "@apollo/client";

export const notification = gql(`
subscription activeUsersUpdated{
  activeUsersUpdated{
    id
    userName
  }
}
`);