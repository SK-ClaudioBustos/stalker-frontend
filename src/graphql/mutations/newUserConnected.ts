import { gql } from "@apollo/client";

export const send_message = gql(`
mutation newUserConnected($userName: String!){
  newUserConnected(userName: $userName)
}
`);