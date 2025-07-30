import { User } from '@/types';

const USER_STORAGE_KEY = 'auth_user';

export const saveUserToStorage = (user: User): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  }
};

export const getUserFromStorage = (): User | null => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem(USER_STORAGE_KEY);
    if (userData) {
      try {
        return JSON.parse(userData) as User;
      } catch (error) {
        console.error('Error parsing user data from storage:', error);
        return null;
      }
    }
  }
  return null;
};

export const removeUserFromStorage = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_STORAGE_KEY);
  }
};

export const isUserLoggedIn = (): boolean => {
  return getUserFromStorage() !== null;
};