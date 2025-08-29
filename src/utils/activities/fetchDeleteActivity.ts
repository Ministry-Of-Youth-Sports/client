const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type Props = {
  id: string;
  token: string | null;
};

export const fetchDeleteActivity = async ({ id, token }: Props) => {
  try {
    const response = await fetch(`${API_BASE_URL}/activities/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error deleting activity");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error deleting activity",
    };
  }
};
