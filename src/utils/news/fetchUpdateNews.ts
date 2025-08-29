const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type fetchUpdateNewsProps = {
  newData: {
    image?: FileList | null;
    title: string;
    content: string;
    socialLink: string;
  };
  token: string | null;
  newId: string;
};

export const fetchUpdateNews = async ({
  newData: { image, content, title, socialLink },
  token,
  newId,
}: fetchUpdateNewsProps) => {
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
    const response = await fetch(`${API_BASE_URL}/news/${newId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("حدث خطاء في تعديل الخبر");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "حدث خطاء في تعديل الخبر",
    };
  }
};
