import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";
const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });

app.use(router.routes());

app.use(router.allowedMethods());

await app.listen({ port: 8000 });
