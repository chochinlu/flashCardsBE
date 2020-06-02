import { Client } from "https://deno.land/x/postgres/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const allConfig = config();
const client = new Client({
    user: allConfig.DATABASE_USER,
    database: allConfig.DATABASE,
    hostname: allConfig.HOSTNAME,
    password: allConfig.DATABASE_PASSWORD,
    port: parseInt(allConfig.DATABASE_PORT, 10),
});

export default client