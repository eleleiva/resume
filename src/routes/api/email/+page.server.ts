// import sgMail from '@sendgrid/mail';
// import { captureException, withSentry } from '@sentry/nextjs';
// import Status from 'http-status-codes';

// import { validateContactEmail } from 'validations';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// async function sendEmail(request, response) {
// 	if (request.method !== 'POST') {
// 		return response.status(Status.BAD_REQUEST).send('');
// 	}

// 	try {
// 		const { body } = request;
// 		const trimmedFields = {
// 			from: body.from?.trim(),
// 			subject: body.subject?.trim(),
// 			text: body.text?.trim()
// 		};

// 		try {
// 			validateContactEmail(trimmedFields);
// 		} catch (inputError) {
// 			captureException(inputError);

// 			return response.status(Status.BAD_REQUEST).send(inputError);
// 		}

// 		const { from, subject, text } = trimmedFields;
// 		const email = {
// 			to: process.env.CONTACT_EMAIL_RECIPIENT,
// 			from: process.env.CONTACT_EMAIL_SENDER,
// 			text: `FROM: ${from} ==== ${text}`,
// 			subject
// 		};
// 		await sgMail.send(email);

// 		return response.json({ message: 'Email has been sent' });
// 	} catch (error) {
// 		captureException(error);

// 		return response.status(Status.INTERNAL_SERVER_ERROR).send('');
// 	}
// }

// export default withSentry(sendEmail);
