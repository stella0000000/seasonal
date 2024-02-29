import { createClient } from "@vercel/postgres";

async function fetchVegetables() {
  const client = createClient();
  await client.connect();

  try {
    const { rows, fields } = await client.sql`SELECT * FROM vegetables;`;
  } finally {
    await client.end();
  }
}
