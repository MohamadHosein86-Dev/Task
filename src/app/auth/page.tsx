"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchRandomUser } from "@/lib/api";
import { saveUserToStorage } from "@/lib/storage";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./page.module.scss";

const AuthPage = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      setError("لطفاً شماره تلفن را وارد کنید");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const user = await fetchRandomUser();
      saveUserToStorage(user);
      router.push("/dashboard");
    } catch (error) {
      setError("خطا در ورود. لطفاً دوباره تلاش کنید.");
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
          <Input 
            label="شماره تلفن" 
            name="phoneNumber" 
            type="tel" 
            placeholder="09123456789" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            error={error} 
            dir="ltr" 
            className={styles.phoneInput} 
          />

          <Button type="submit" loading={isLoading} className={styles.submitButton}>
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
