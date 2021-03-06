import { authedUser, genToken } from "../services/validation.ts";

export default async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  if (authedUser(body.value)) {
    response.status = 200;
    response.body = { token: genToken() };
  } else {
    response.status = 401;
    response.body = {
      error: "username or password not right",
    };
  }
};
