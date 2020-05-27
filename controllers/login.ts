export default async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const { username, password } = body.value;
  if (!username || !password) {
    response.status = 401;
    response.body = {
      error: "Need username and password to login",
    };
  } else {
    response.status = 200;
    response.body = { username, password };
  }
};
