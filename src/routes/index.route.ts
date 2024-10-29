import { createRoute, z } from "@hono/zod-openapi";

import * as HttpsStatusCode from "@/constants/http-status-codes";
import jsonContent from "@/helpers/json-content";
import createMessageObjectSchema from "@/helpers/schemas/create-message-object";
import { createRouter } from "@/lib/create-app";

const router = createRouter().openapi(createRoute({
  tags: ["index"],
  method: "get",
  path: "/",
  responses: {
    [HttpsStatusCode.OK]: jsonContent(createMessageObjectSchema(true, "Welcome to he API entry point!"), "API entry point || Index."),
  },
}), (c) => {
  return c.json({ success: true, message: "Welcome to he API entry point!" }, HttpsStatusCode.OK);
});

export default router;
