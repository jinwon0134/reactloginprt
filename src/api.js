// src/services/api.js
const API_URL = 'http://localhost:8080/api/auth/';

export const registerUser = async (data) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return response.json();
};

export const loginUser = async (data) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};
