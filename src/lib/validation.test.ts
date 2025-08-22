import { phoneNumberSchema, authFormSchema } from './validation';

// تست‌های ساده برای validation schema
export const testPhoneValidation = () => {
    console.log('🧪 Testing Phone Validation...');

    // تست شماره‌های معتبر
    const validNumbers = ['09123456789', '09987654321', '09000000000'];
    validNumbers.forEach(num => {
        const result = phoneNumberSchema.safeParse(num);
        console.log(`✅ ${num}: ${result.success ? 'Valid' : 'Invalid'}`);
    });

    // تست شماره‌های نامعتبر
    const invalidNumbers = [
        '12345678901', // بدون 09
        '0912345678',  // کمتر از 11 رقم
        '091234567890', // بیشتر از 11 رقم
        '0912345678a',  // شامل حروف
        '',            // خالی
    ];

    invalidNumbers.forEach(num => {
        const result = phoneNumberSchema.safeParse(num);
        console.log(`❌ ${num}: ${result.success ? 'Valid' : 'Invalid'}`);
    });
};

// برای تست در development
if (process.env.NODE_ENV === 'development') {
    testPhoneValidation();
}
