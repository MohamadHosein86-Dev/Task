"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchRandomUser } from "@/lib/api";
import { saveUserToStorage } from "@/lib/storage";
import { authFormSchema, type AuthFormData } from "@/lib/validation";
import { useFormValidation } from "@/hooks/useFormValidation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import styles from "./page.module.scss";

const AuthPage = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { errors, validate, validateField, clearError } = useFormValidation(authFormSchema);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // اعتبارسنجی کامل فرم
    if (!validate({ phoneNumber })) {
      return;
    }

    setIsLoading(true);

    try {
      const user = await fetchRandomUser();
      saveUserToStorage(user);
      router.push("/dashboard");
    } catch {
      // در صورت خطا در API، خطای عمومی نمایش بده
      clearError('phoneNumber');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // فقط اعداد را قبول کن
    const numericValue = value.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
    
    // اعتبارسنجی real-time
    if (numericValue.length > 0) {
      validateField('phoneNumber', numericValue);
    } else {
      clearError('phoneNumber');
    }
  };

  const handlePhoneBlur = () => {
    // اعتبارسنجی کامل فیلد وقتی کاربر از فیلد خارج می‌شود
    if (phoneNumber.length > 0) {
      validateField('phoneNumber', phoneNumber);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>ورود به سیستم</h1>
          <p className={styles.subtitle}>لطفاً شماره تلفن خود را وارد کنید</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Input 
            label="شماره تلفن" 
            name="phoneNumber" 
            type="tel" 
            placeholder="09123456789" 
            value={phoneNumber} 
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
            error={errors.phoneNumber} 
            dir="ltr" 
            className={styles.phoneInput}
            maxLength={11}
          />

          <Button 
            type="submit" 
            loading={isLoading} 
            disabled={!!errors.phoneNumber || phoneNumber.length === 0}
            className={styles.submitButton}
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
