import { createRouter, defineEventHandler } from 'h3';

export const router = createRouter();

router.get('/', defineEventHandler(() => 'Hello!'));
