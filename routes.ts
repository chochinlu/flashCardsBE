import { Router } from "https://deno.land/x/oak/mod.ts";
import greeting from "./controllers/greeting.ts";
import login from "./controllers/login.ts";
import auth from "./controllers/auth.ts";
import { getAllWeather } from "./controllers/weather.ts";
import {
  getAllFlashCard,
  addFlashCard,
  updateFlashCard,
} from "./controllers/flashCard.ts";

const router = new Router();
router
  .get("/", greeting)
  .get("/auth_greeting", auth, greeting)
  .post("/login", login)
  .get("/weather", getAllWeather)
  .get("/flash_card", getAllFlashCard)
  .post("/flash_card", addFlashCard)
  .put("/flash_card", updateFlashCard);

export default router;
