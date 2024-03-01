import { useQuery, gql } from "@apollo/client";

const ALL_FRUITS_QUERY = gql`
  query {
    fruits {
      id
      name
      season
    }
  }
`;

function Fruits() {
  const { loading, error, data } = useQuery(ALL_FRUITS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.allFruits.map((fruit: any) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}

export default Fruits;
