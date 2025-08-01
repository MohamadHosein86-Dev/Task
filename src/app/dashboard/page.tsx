"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserFromStorage, removeUserFromStorage } from "@/lib/storage";
import { User } from "@/types";
import Button from "@/components/ui/Button";
import styles from "./page.module.scss";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = getUserFromStorage();
    if (!userData) {
      router.push("/auth");
      return;
    }
    setUser(userData);
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    removeUserFromStorage();
    router.push("/auth");
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }
  const {
    registered: { date },
    dob: { age },
    name: { title, first, last },
    phone,
    picture: { large },
    email,
    location: { city, country }
  } = user;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.welcomeSection}>
          <h1 className={styles.title}>خوش آمدید به داشبورد</h1>
          <p className={styles.subtitle}>
            سلام {first} {last}!
          </p>
        </div>
        <Button variant="secondary" onClick={handleLogout} className={styles.logoutButton}>
          خروج
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.userCard}>
          <div className={styles.userAvatar}>
            <img src={large} alt={`${first} ${last}`} className={styles.avatar} />
          </div>

          <div className={styles.userInfo}>
            <h2 className={styles.userName}>
              {title} {first} {last}
            </h2>
            <p className={styles.userEmail}>{email}</p>
            <p className={styles.userLocation}>
              {city}, {country}
            </p>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>سن</h3>
            <p className={styles.statValue}>{age} سال</p>
          </div>
          <div className={styles.statCard}>
            <h3>تلفن</h3>
            <p className={styles.statValue}>{phone}</p>
          </div>
          <div className={styles.statCard}>
            <h3>تاریخ عضویت</h3>
            <p className={styles.statValue}>{new Date(date).toLocaleDateString("fa-IR")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
