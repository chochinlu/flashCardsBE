import { config } from "https://deno.land/x/dotenv/mod.ts";

const allConfig = config();

const authedUser = (username: string, password: string) => {
  return username === allConfig.USER && password === allConfig.PASSWORD;
};

export { authedUser };
