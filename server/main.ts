import { toWebHandler } from 'h3';

import { app } from "./app.ts";

const handler = toWebHandler(app);

Deno.serve((req, info) => handler(req, info as unknown as Record<string, unknown>));
