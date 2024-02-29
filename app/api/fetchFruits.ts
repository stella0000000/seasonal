import { createClient } from "@vercel/postgres";

async function fetchFruits() {
  const client = createClient();
  await client.connect();

  try {
    const { rows, fields } = await client.sql`SELECT * FROM fruits;`;
  } finally {
    await client.end();
  }
}
