import React from 'react';
import styles from '@/styles/ErrorMessage.module.scss';

interface ErrorMessageProps {
  message?: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => {
  if (!message) return null;

  return (
    <div className={`${styles.errorMessage} ${className}`}>
      <span className={styles.icon}>⚠️</span>
      <span className={styles.text}>{message}</span>
    </div>
  );
};

export default ErrorMessage;
