import { z } from 'zod';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const formSchema = z
  .object({
    location: z.string().nonempty('Location is required'),
    checkIn: z.string().nonempty('Check-in date is required'),
    checkOut: z.string().nonempty('Check-out date is required'),
    guests: z
      .number()
      .min(1, 'Guests must be at least 1')
      .int('Guests must be a whole number')
  })
  .refine((data) => new Date(data.checkIn) >= today, {
    path: ['checkIn'],
    message: 'Cannot be in the past'
  })
  .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    path: ['checkOut'],
    message: 'Cannot be before check-in'
  });
