import { Router } from "https://deno.land/x/oak/mod.ts";
import greeting from "./controllers/greeting.ts";
import login from "./controllers/login.ts";
import auth from "./controllers/auth.ts";
import { getAllCities } from "./controllers/cities.ts";

const router = new Router();
router
  .get("/", greeting)
  .get("/auth_greeting", auth, greeting)
  .post("/login", login)
  .get("/cities", getAllCities);

export default router;
