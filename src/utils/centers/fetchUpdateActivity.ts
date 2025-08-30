import { UpdateActivityFormType } from "@/lib/validations/ActivityCrudSchema";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type fetchUpdateActivityProps = {
  activityData: UpdateActivityFormType;
  token: string | null;
  id: string;
};

export const fetchUpdateActivity = async ({
  activityData,
  token,
  id,
}: fetchUpdateActivityProps) => {
  try {
    const formatedData = {
      projectName: activityData.projectName,
      coordinatorName: activityData.coordinatorName,
      phoneNumber: activityData.phoneNumber,
      location: activityData.location,
      date: activityData.date,
      time: activityData.time,
      daysCount: activityData.daysCount,
      participantsCount: activityData.participantsCount,
      notes: activityData.notes,
      gender: activityData.gender,
      accessType: activityData.accessType,
      targetAge: {
        min: activityData.minAge,
        max: activityData.maxAge,
      },
      status: activityData.status,
    };

    // Debug logs
    console.log("Sending data:", formatedData);

    const response = await fetch(`${API_BASE_URL}/activities/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formatedData),
    });

    console.log("Response status:", response);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("حدث خطاء في تعديل النشاط");
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "حدث خطاء في تعديل النشاط",
    };
  }
};
