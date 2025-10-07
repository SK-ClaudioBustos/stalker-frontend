import { gql } from "@apollo/client";

export const send_message = gql(`
mutation sendMessage($args: CreateMessage!){
  sendMessage(args: $args)
}
`);
