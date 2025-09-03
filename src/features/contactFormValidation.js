import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty('Name  is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  email: z.string().nonempty('Email is required').email('Invalid email address'),
  message: z
    .string()
    .nonempty('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(256, 'Message must be at most 256 characters'),
});

export const contactForm = z.object({
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long')
    .regex(/^\+?\d+$/, 'Phone number must contain only digits and optional +'),
});
