const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type FetchCreateNewsProps = {
  newData: {
    image?: FileList | null;
    title: string;
    content: string;
    socialLink: string;
  };
  token: string | null;
};

export const fetchCreateNews = async ({
  newData: { image, content, title, socialLink },
  token,
}: FetchCreateNewsProps) => {
  const formData = new FormData();

  // Add file ------
  const file = image && image.length > 0 ? image[0] : null;
  if (file) {
    formData.append("image", file, file.name);
  }

  formData.append("title", title ?? "");
  formData.append("content", content ?? "");
  formData.append("socialLink", socialLink ?? "");

  try {
    const response = await fetch(`${API_BASE_URL}/news`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "حدث خطاء في انشاء الخبر");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "حدث خطاء في انشاء الخبر",
    };
  }
};
