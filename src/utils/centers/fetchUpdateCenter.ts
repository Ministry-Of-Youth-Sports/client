import { UpdateCenterFormType } from "@/lib/validations/CentersCrudScheam";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type fetchUpdateActivityProps = {
  centerData: UpdateCenterFormType;
  token: string | null;
  id: string;
};

export const fetchUpdateCenter = async ({
  centerData,
  token,
  id,
}: fetchUpdateActivityProps) => {
  // Check if there's an actual image file
  const hasImage = centerData.image && centerData.image.name;

  if (hasImage) {
    // Send as FormData when there's an image
    const formData = new FormData();

    // Add all fields except image
    Object.keys(centerData).forEach((key) => {
      if (key !== "image") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formData.append(key, JSON.stringify((centerData as any)[key]));
      }
    });

    // Add image file
    formData.append("image", centerData.image ? centerData.image.name : "");
  }
  try {
    const response = await fetch(`${API_BASE_URL}/centers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(centerData),
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "حدث خطاء في تعديل بيانات المركز");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "حدث خطاء في تعديل بيانات المراكز",
    };
  }
};
