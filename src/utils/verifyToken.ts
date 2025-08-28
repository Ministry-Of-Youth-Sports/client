const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const verifyToken = async (
  token: string
): Promise<{
  success: boolean;
  message: string;
  role: string;
  email: string;
}> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/verify-token`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Token verification failed");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Token verification failed",
      role: "",
      email: "",
    };
  }
};
