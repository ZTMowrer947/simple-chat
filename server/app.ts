import { createApp, fromWebHandler } from 'h3';

import { router } from './router.ts';
import { yoga } from "./graphql/yoga.ts";

export const app = createApp();

app.use(router);
app.use('/graphql', fromWebHandler(async (req, ctx) => await yoga.fetch(req, ctx ?? {})));
