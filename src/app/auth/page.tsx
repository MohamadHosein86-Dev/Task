"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { authSchema, type AuthFormData } from "@/lib/validation";
import { ZodError } from "zod";
import { fetchRandomUser } from "@/lib/api";
import { saveUserToStorage } from "@/lib/storage";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./page.module.scss";

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<AuthFormData>({
    phoneNumber: ""
  });
  const [errors, setErrors] = useState<Partial<AuthFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof AuthFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    try {
      authSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: Partial<AuthFormData> = {};
        error.issues.forEach((issue) => {
          const fieldName = issue.path[0] as keyof AuthFormData;
          newErrors[fieldName] = issue.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const user = await fetchRandomUser();
      saveUserToStorage(user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({
        phoneNumber: "خطا در ورود. لطفاً دوباره تلاش کنید."
      });
    } finally {
      setIsLoading(false);
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
          <Input ref={phoneInputRef} label="شماره تلفن" name="phoneNumber" type="tel" placeholder="09123456789" value={formData.phoneNumber} onChange={handleInputChange} error={errors.phoneNumber} dir="ltr" className={styles.phoneInput} />

          <Button type="submit" loading={isLoading} className={styles.submitButton}>
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
