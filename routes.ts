import { Router } from "https://deno.land/x/oak/mod.ts";
import greeting from "./controllers/greeting.ts";

const router = new Router();
router
  .get("/", greeting);

export default router;
