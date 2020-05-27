import { Application } from "https://deno.land/x/oak/mod.ts";
import _404 from "./controllers/404.ts";
import router from "./routes.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

const port = 4000;
console.log("server run at port: ", port);
await app.listen({ port });
