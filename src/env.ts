import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	RESEND_API_KEY: {},
	CONTACT_EMAIL_RECIPIENT: {},
	CONTACT_EMAIL_SENDER: {}
});
