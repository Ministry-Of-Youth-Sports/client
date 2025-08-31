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

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "حدث خطاء في حذف الانشطة");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "حدث خطاء في حذف الانشطة",
    };
  }
};
