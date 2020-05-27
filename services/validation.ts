import { config } from "https://deno.land/x/dotenv/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";

const allConfig = config();
const key: string = allConfig.KEY;

const authedUser = (
  { username, password }: { username: string; password: string },
) => {
  return username === allConfig.USER && password === allConfig.PASSWORD;
};

const genToken = () => {
  const payload: Payload = {
    iss: "Park",
    exp: setExpiration(new Date().getTime() + 60000000),
  };
  const header: Jose = {
    alg: "HS256",
    typ: "JWT",
  };
  return makeJwt({ header, payload, key });
};

const authedToken = async (headers: Headers) => {
  const authorization = headers.get("Authorization");
  if (!authorization) {
    return false;
  }
  const jwt = authorization.split(" ")[1];
  if (!jwt) {
    return false;
  }
  return await validateJwt(jwt, key, { isThrowing: false });
};

export { authedUser, genToken, authedToken };
