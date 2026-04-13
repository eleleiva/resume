import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Resend } from 'resend';
import { z } from 'zod';
import { RESEND_API_KEY, CONTACT_EMAIL_RECIPIENT, CONTACT_EMAIL_SENDER } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

const contactSchema = z.object({
	subject: z.string().min(2),
	from: z.email(),
	message: z.string().min(10)
});

const contactFormSender =
	process.env.NODE_ENV === 'production' ? `<${CONTACT_EMAIL_SENDER}>` : '<onboarding@resend.dev>';

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		const result = contactSchema.safeParse(formData);

		if (!result.success) {
			console.log('z.treeifyError(result.error): ', z.treeifyError(result.error));

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
