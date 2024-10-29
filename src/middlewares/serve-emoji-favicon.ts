import type { MiddlewareHandler } from "hono";

import { readFile } from "node:fs/promises";

function serveFavicon(): MiddlewareHandler {
  return async function (c, next) {
    if (c.req.path === "/favicon.ico") {
      const image = await readFile("./public/favicon.png"); // Path to the PNG
      c.header("Content-Type", "image/png");
      return c.body(image);
    }
    return next();
  };
}

export default serveFavicon;
