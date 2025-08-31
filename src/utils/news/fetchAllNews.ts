const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchAllNews = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/news?page=1&limit=50`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "Error fetching news data");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error fetching news data",
    };
  }
};
