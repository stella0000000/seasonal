import { Pool } from "pg";

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432, // Default PostgreSQL port
});

// Export the pool for use in other modules
export default pool;
