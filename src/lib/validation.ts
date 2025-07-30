import { z } from 'zod';

export const authSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, 'شماره تلفن الزامی است')
    .regex(/^09\d{9}$/, 'شماره تلفن باید ۱۱ رقم و با ۰۹ شروع شود')
});

export type AuthFormData = z.infer<typeof authSchema>;