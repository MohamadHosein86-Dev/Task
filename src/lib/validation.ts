import { z } from 'zod';

export const phoneNumberSchema = z.string().min(1, 'لطفاً شماره تلفن را وارد کنید').regex(/^09[0-9]{9}$/, 'شماره تلفن باید 11 رقم و با 09 شروع شود').refine((value) => value.length === 11, 'شماره تلفن باید دقیقاً 11 رقم باشد');

export const authFormSchema = z.object({
    phoneNumber: phoneNumberSchema,
});

export type AuthFormData = z.infer<typeof authFormSchema>;
