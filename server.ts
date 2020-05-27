import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

const port = 4000;
console.log("server run at port: ", port);
await app.listen({ port });
