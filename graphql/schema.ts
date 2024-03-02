// Define types, queries, and mutations

import "./types/Fruit";
import "./types/Vegetable";
import { builder } from "./builder";

export const schema = builder.toSchema();

// Defines the structure of a fruit object
// and a query to return all fruits.

// export const typeDefs = `
// type Fruit {
//   id: Int
//   name: String
//   season_name: String
// }

// type Vegetable {
//   id: Int
//   name: String
//   season_name: String
// }

// type Query {
//   fruits: [Fruit]!
//   vegetables: [Vegetable]!
// }
// `;

// type Query {
//   fruits(season: Season!): [Fruit]!
//   vegetables(season: Season!): [Vegetable]!
// }

// Create, update, delete data.
// type Mutation {
// }
