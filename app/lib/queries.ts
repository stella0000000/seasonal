import { gql } from "@apollo/client";

export const FRUITS_BY_SEASON = gql`
  query FruitsBySeason($season: String!) {
    fruitsBySeason(season: $season) {
      id
      name
      season_name
    }
  }
`;

export const VEGETABLES_BY_SEASON = gql`
  query VegetablesBySeason($season: String!) {
    vegetablesBySeason(season: $season) {
      id
      name
      season_name
    }
  }
`;
