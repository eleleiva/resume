import type { Actions } from './$types';
import { contactAction } from '#lib/server/contact.ts';

export const actions = {
	default: contactAction
} satisfies Actions;
