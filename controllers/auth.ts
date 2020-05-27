import { authedToken } from "../services/validation.ts";

export default async (
  { request, response }: { request: any; response: any },
  next: any,
) => {
  const headers: Headers = request.headers;
  if (await authedToken(headers)) {
    await next();
  } else {
    response.status = 401;
    response.body = {
      error: "auth fail",
    };
  }
};
