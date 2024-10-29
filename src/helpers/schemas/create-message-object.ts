import { z } from "@hono/zod-openapi";

function createMessageObjectSchema(success: boolean, exampleMessage: string = "Hello World") {
  return z.object({
    success: z.boolean(),
    message: z.string(),
  }).openapi({
    example: {
      success,
      message: exampleMessage,
    },
  });
}

export default createMessageObjectSchema;
