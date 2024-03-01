// Define types, queries, and mutations

// Define structure of fruit object
// and a query to return all fruits.
export const typeDefs = `
type Fruit {
  id: Int
  name: String
  season: String
}

type Query {
  fruits: [Fruit]!
}
`;

// type Query {
//   fruits: [Fruit]!
//   vegetables: [Vegetable]!
//   fruits(season: Season!): [Fruit]!
//   vegetables(season: Season!): [Vegetable]!
// }

// Define structure of vegetable object
// type Vegetable {
//   id: Int
//   name: String
//   season: Season
// }

// Create, update, delete data.
// type Mutation {
// }
