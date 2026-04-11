import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import {
	CONTACT_EMAIL_RECIPIENT,
	FORWARD_EMAIL_PASSWORD,
	FORWARD_EMAIL_USER
} from '$env/static/private';
import type { Actions } from './$types';

const transporter = nodemailer.createTransport({
	host: 'smtp-relay.sendinblue.com',
	port: 587,
	auth: {
		user: FORWARD_EMAIL_USER,
		pass: FORWARD_EMAIL_PASSWORD
	}
});

async function sendEmail(request: Request) {
	try {
		const data = await request.formData();
		const from = data.get('from');
		const subject = data.get('subject');
		const message = data.get('message');

		switch (true) {
			case !from:
				return fail(400, { from, missing: true });
			case !subject:
				return fail(400, { subject, missing: true });
			case !message:
				return fail(400, { message, missing: true });
		}

		const email = {
			to: CONTACT_EMAIL_RECIPIENT,
			from: CONTACT_EMAIL_RECIPIENT,
			text: `FROM: ${from} ==== ${message}`,
			subject: subject as string
		};

		await transporter.sendMail(email);

		return { success: true };
	} catch {
		return fail(500);
	}
}

export const actions = {
	default: async ({ request }) => {
		return sendEmail(request);
	}
} satisfies Actions;
