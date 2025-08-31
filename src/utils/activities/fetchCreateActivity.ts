const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type fetchCreateActivityProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activityData: any;
  token: string | null;
};

export const fetchCreateActivity = async ({
  activityData,
  token,
}: fetchCreateActivityProps) => {
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

    const response = await fetch(`${API_BASE_URL}/activities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formatedData),
    });

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "حدث خطاء في انشاء النشاط",
    };
  }
};
