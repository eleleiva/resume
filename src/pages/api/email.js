import sgMail from '@sendgrid/mail';
import Status from 'http-status-codes';

import { validateContactEmail } from 'validations';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (request, response) => {
  if (request.method !== 'POST') {
    return response.status(Status.BAD_REQUEST).send('');
  }

  try {
    const { body } = request;

    try {
      validateContactEmail(body);
    } catch (inputError) {
      return response.status(Status.BAD_REQUEST).send(inputError);
    }

    const { from, subject, text } = body;
    const email = {
      to: process.env.CONTACT_EMAIL_RECIPIENT,
      from: process.env.CONTACT_EMAIL_SENDER,
      text: `FROM: ${from} ==== ${text}`,
      subject,
    };

    await sgMail.send(email);

    return response.json({ message: 'Email has been sent' });
  } catch (error) {
    return response.status(Status.INTERNAL_SERVER_ERROR).send('');
  }
};

export default sendEmail;
