import { ContactEmail } from './schemas';

class ValidationError extends Error {
  constructor(errors, ...params) {
    super(...params);

    this.errors = errors;
  }
}

function validateContactEmail(input) {
  try {
    ContactEmail.parse(input);
  } catch (error) {
    throw new ValidationError(error.flatten());
  }
}

export { validateContactEmail };
