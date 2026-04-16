import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Resend } from 'resend';
import { z } from 'zod';
import { RESEND_API_KEY, CONTACT_EMAIL_RECIPIENT, CONTACT_EMAIL_SENDER } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);
const HONEYPOT_FIELD = 'company';

const contactSchema = z.object({
	from: z.string().trim().email().max(320),
	subject: z.string().trim().min(2).max(120),
	message: z.string().trim().min(10).max(5000),
	[HONEYPOT_FIELD]: z.string().trim().max(0).optional().default('')
});

const contactFormSender =
	process.env.NODE_ENV === 'production' ? `<${CONTACT_EMAIL_SENDER}>` : '<onboarding@resend.dev>';

export const actions = {
	default: async ({ request }) => {
		const requestFormData = await request.formData();
		const honeypotValue = requestFormData.get(HONEYPOT_FIELD);

		if (typeof honeypotValue === 'string' && honeypotValue.trim().length > 0) {
			return { success: true };
		}

		const formData = Object.fromEntries(requestFormData);

		const result = contactSchema.safeParse(formData);

		if (!result.success) {
			return fail(400, { errors: z.treeifyError(result.error) });
		}

		const { subject, from, message } = result.data;

		try {
			await resend.emails.send({
				from: `Contact Form ${contactFormSender}`,
				to: CONTACT_EMAIL_RECIPIENT,
				subject: subject,
				text: `From: ${from}\n\n${message}`
			});

			return { success: true };
		} catch {
			return fail(500, { message: 'Could not send email' });
		}
	}
} satisfies Actions;
