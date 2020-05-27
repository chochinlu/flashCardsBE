import { config } from "https://deno.land/x/dotenv/mod.ts";
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";

const allConfig = config();

const authedUser = (
  { username, password }: { username: string; password: string },
) => {
  return username === allConfig.USER && password === allConfig.PASSWORD;
};

const genToken = () => {
  const key: string = allConfig.KEY;
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

export { authedUser, genToken };
