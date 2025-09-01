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
  try {
    const formData = new FormData();

    // Add all data to FormData
    Object.keys(centerData).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value = (centerData as any)[key];

      if (key === "image" && value instanceof File) {
        formData.append("image", value);
      } else if (key !== "image" && value !== undefined) {
        formData.append(key, String(value));
      }
    });

    const response = await fetch(`${API_BASE_URL}/centers/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
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
