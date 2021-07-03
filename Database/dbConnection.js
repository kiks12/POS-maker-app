/* database connection dependencies */
import { Pool } from "pg";

/* destructuring of process.env */
const env = process.env;

/* Pool connection instance */
const connection = new Pool({
  host: env.PG_HOST,
  user: env.PG_USER,
  password: env.PG_PASSWORD,
  port: env.PG_PORT,
  database: env.PG_DATABASE,
});

export default connection;
