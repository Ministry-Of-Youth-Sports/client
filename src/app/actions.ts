"use server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function login({ email, password }: { email: string; password: string }) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    return { data, success: response.ok };
  } catch (error) {
    return error;
  }
}

export { login };
