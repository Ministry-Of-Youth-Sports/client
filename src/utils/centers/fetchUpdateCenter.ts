/* eslint-disable @typescript-eslint/no-explicit-any */
import { UpdateCenterFormType } from "@/lib/validations/CentersCrudScheam";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type fetchUpdateActivityProps = {
  centerData: UpdateCenterFormType;
  token: string | null;
  id: string;
};

const getFirstFile = (img: any): File | undefined => {
  if (!img) return undefined;
  if (img instanceof File) return img;
  if (typeof FileList !== "undefined" && img instanceof FileList) return img[0];
  if (Array.isArray(img) && img.length > 0 && img[0] instanceof File)
    return img[0];
  return undefined;
};

export const fetchUpdateCenter = async ({
  centerData,
  token,
  id,
}: fetchUpdateActivityProps) => {
  try {
    const formData = new FormData();

    // handle image (support File, FileList or array-of-files)
    const imageFile = getFirstFile((centerData as any).image);
    if (imageFile) {
      formData.append("image", imageFile, imageFile.name);
    }

    // append other fields (skip image)
    Object.entries(centerData as Record<string, any>).forEach(
      ([key, value]) => {
        if (key === "image" || value === undefined || value === null) return;

        // arrays and objects -> JSON stringify so backend can parse them
        if (Array.isArray(value) || typeof value === "object") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, String(value));
        }
      }
    );

    // Build headers (do NOT set Content-Type when sending FormData)
    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const response = await fetch(`${API_BASE_URL}/centers/${id}`, {
      method: "PUT",
      headers,
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data?.message || "حدث خطاء في تعديل بيانات المركز");
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "حدث خطاء في تعديل بيانات المراكز",
    };
  }
};
