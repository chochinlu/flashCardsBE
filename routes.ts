import { Router } from "https://deno.land/x/oak/mod.ts";
import greeting from "./controllers/greeting.ts";
import login from "./controllers/login.ts";

const router = new Router();
router
  .get("/", greeting)
  .post("/login", login);

export default router;
