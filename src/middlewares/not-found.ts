import type { NotFoundHandler } from "hono";

import { NOT_FOUND } from "@/constants/http-status-codes";
import { NOT_FOUND as NOT_FOUND_MESSAGE } from "@/constants/http-status-phrases";

const notFound: NotFoundHandler = (c) => {
  return c.json({
    success: false,
    message: `${NOT_FOUND_MESSAGE} - ${c.req.path}`,
  }, NOT_FOUND);
};

export default notFound;
