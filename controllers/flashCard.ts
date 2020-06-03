import pool from "../db.ts";

interface flashCardObject {
  id: number;
  frontQuestion: string;
  backAnswer: string;
  familiar: boolean;
}

const getAllFlashCard = async ({ response }: { response: any }) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "SELECT * FROM flash_card",
    );

    await result.rows.map((row: flashCardObject) => {
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
    client.release();
  }
};

export { getAllFlashCard };
