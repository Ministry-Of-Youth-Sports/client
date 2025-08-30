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
    const response = await fetch(`${API_BASE_URL}/activits`, {
      method: "POST",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(activityData),
    });

    console.log(response);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("حدث خطاء في انشاء النشاط");
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
