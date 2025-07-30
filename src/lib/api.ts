import { ApiResponse, User } from '@/types';

export const fetchRandomUser = async (): Promise<User> => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=1&nat=us');

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data: ApiResponse = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error('No user data received');
    }

    return data.results[0];
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};