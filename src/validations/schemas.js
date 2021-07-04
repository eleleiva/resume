import { z } from 'zod';

const ContactEmail = z.object({
  from: z.string().email(),
  subject: z.string().min(3),
  text: z.string().min(10),
});

export { ContactEmail };
