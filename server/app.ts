import { createApp } from 'h3';

import { router } from './router.ts';

export const app = createApp();

app.use(router);
