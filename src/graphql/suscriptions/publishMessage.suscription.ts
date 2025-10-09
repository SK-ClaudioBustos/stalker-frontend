import { gql } from "@apollo/client";

export const publish_message = gql(`
subscription PublishMessage($to: String!){
  publishMessage(to: $to) {
   	from
    message
    dateTime
    to
  }
}
`);