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

const addFlashCard = async (
  { request, response }: { request: any; response: any },
) => {
  const client = await pool.connect();
  try {
    const body = await request.body();
    const { front_question, back_answer } = body.value;
    console.log(front_question, back_answer);
    const result = await client.query(
      "insert into flash_card (id, front_question, back_answer, familiar) values( DEFAULT, $1, $2, $3)",
      front_question,
      back_answer,
      false,
    );

    response.status = 200;
    response.body = { ok: "ok" };
  } catch (error) {
    response.status = 500;
    response.body = {
      error: error.toString(),
    };
  } finally {
    client.release();
  }
};

// TODO: update

// TODO: delete

export { getAllFlashCard, addFlashCard };
