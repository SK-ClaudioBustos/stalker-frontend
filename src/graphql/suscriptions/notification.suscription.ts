import { gql } from "@apollo/client";

export const notification = gql(`
subscription OnNotification {
  notification {
    content
  }
}
`);
