import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

/**
 * Returns the whole user list
 */
export const fetchUsers = async () => {
  return (await axios(`${API_URL}/users`)).data;
};
