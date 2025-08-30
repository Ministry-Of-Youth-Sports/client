export const dynamic = "force-dynamic";
export const revalidate = 0;

import ActivitiesCardBoxs from "@/components/dashbourd/activities/ActivitiesCardBoxs";
import { fetchAllActivities } from "@/utils/activities/fetchAllActivities";
import { toast } from "sonner";

type ActivitiesData = {
  success: boolean;
  activits: ActivityType[];
};

export type ActivityType = {
  _id: string;
  projectName: string;
  coordinatorName: string;
  phoneNumber: string;
  location: string;
  date: string;
  time: string;
  daysCount: number;
  participantsCount: number;
  targetAge: { min: number; max: number };
  gender: "بنين" | "بنات" | "مختلط";
  accessType: "الأعضاء فقط" | "للجميع";
  notes?: string;
  status: "مجدول" | "جاري" | "ملغي";

  ageRange?: string;
  duration?: string;
};

const ActivitiesPage = async () => {
  const { success, activits }: ActivitiesData = await fetchAllActivities();

  if (!success) {
    toast.error("حدث خطأ أثناء تحميل الانشطة", {
      style: {
        backgroundColor: "#8B0000",
        color: "#fff",
        borderColor: "#8B0000",
      },
    });

    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
        <p className="text-red-600 text-lg font-semibold mb-2">
          خطأ في تحميل الانشطة
        </p>
        <p className="text-gray-600">يرجى المحاولة مرة أخرى لاحقاً</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-5">
      {activits.map((activity) => (
        <ActivitiesCardBoxs key={activity._id} data={activity} />
      ))}
    </div>
  );
};

export default ActivitiesPage;
