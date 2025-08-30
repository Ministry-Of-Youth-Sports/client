const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCenter = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/centers/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("حدث خطا في جلب بيانات المركز ");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "حدث خطا في جلب بيانات المركز",
    };
  }
};
