const API_URL = "http://127.0.0.1:8000/api";

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  if (!response.ok) {throw new Error(data.message);}
  return data;
}

export async function register(
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation,
    }),
  });

  const data = await response.json();
  if (!response.ok) {throw new Error(data.message);}
  return data;
}