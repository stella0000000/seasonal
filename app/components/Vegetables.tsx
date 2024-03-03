// this component is moot
// it was written for testing purposes

import { useQuery, gql } from "@apollo/client";
import { Vegetable } from "@prisma/client";
import Loading from "./Loading";

const AllVegetablesQuery = gql`
  query {
    Vegetables {
      id
      name
      season_name
    }
  }
`;

function Vegetables() {
  const { loading, error, data } = useQuery(AllVegetablesQuery);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.vegetables.map((vegetable: Vegetable) => (
        <>
          <li key={vegetable.id}>{vegetable.name}</li>
          <li key={vegetable.id}>{vegetable.season_name}</li>
        </>
      ))}
    </ul>
  );
}

export default Vegetables;
