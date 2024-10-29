import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "@/lib/types";

import packageJSON from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: packageJSON.version,
    info: {
      version: "1.0.0",
      title: "Shumail.dev API",
    },
  });
  app.get("/reference", apiReference({
    theme: "kepler",
    layout: "classic",
    defaultHttpClient: {
      clientKey: "fetch",
      targetKey: "javascript",
    },
    spec: {
      url: "/doc",
    },
  }));
}
