import { gql } from "@apollo/client";

export const get_modifications = gql(`
query getModifications($params: FindModificationsParams!) {
  getModifications(params: $params) {
    modificationsCount
    modifications {
      id
      titulo
      portadaPath
    }
  }
}
`);