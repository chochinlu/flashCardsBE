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

const getAllWeather = async ({ response }: { response: any }) => {
  try {
    await client.connect();
    const result = await client.query(
      "SELECT * FROM weather",
    );

    interface weatherObject {
      city: string,
      temp_lo: number,
      temp_high: number,
      prcp: number,
      date: Date
    }

    await result.rows.map((row: weatherObject) => {
      console.log(JSON.stringify(row, null, 2));
    });

    response.status = 200;
    response.body = { ok: result.rows };
  } catch (error) {
    response.status = 500;
    response.body = {
      error: error.toString(),
    };
  } finally {
    await client.end();
  }
};

export { getAllWeather };