import { useQuery, gql } from "@apollo/client";
import { Fruit } from "@prisma/client";

const ALL_FRUITS_QUERY = gql`
  query {
    fruits {
      id
      name
      season_name
    }
  }
`;

function Fruits() {
  const { loading, error, data } = useQuery(ALL_FRUITS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.fruits.map((fruit: Fruit) => (
        <>
          <li key={fruit.id}>{fruit.name}</li>
          <li key={fruit.id}>{fruit.season_name}</li>
        </>
      ))}
    </ul>
  );
}

export default Fruits;
