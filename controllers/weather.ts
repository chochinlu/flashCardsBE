import client from '../db.ts'

interface weatherObject {
  city: string,
  temp_lo: number,
  temp_high: number,
  prcp: number,
  date: Date
}

const getAllWeather = async ({ response }: { response: any }) => {
  try {
    await client.connect()
    const result = await client.query(
      "SELECT * FROM weather",
    );

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
