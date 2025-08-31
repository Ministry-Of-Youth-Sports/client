const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchAllActivities = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "حدث خطاء في جلب الانشطة و البرامج");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "حدث خطاء في جلب الانشطة و البرامج",
    };
  }
};
