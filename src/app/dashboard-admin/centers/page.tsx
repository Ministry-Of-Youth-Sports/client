export const dynamic = "force-dynamic";
export const revalidate = 0;

import CenterCardBoxs from "@/components/dashbourd/centers/CenterCardBoxs";
import { fetchAllCenters } from "@/utils/centers/fetchAllCenters";
import { toast } from "sonner";

export type CenterType = {
  _id: string;
  name: string;
  phone: string;
  address: string;
  facebookLink?: string;
  location: string;
  LocationArea: string;
  region: string;
  image: {
    public_id: string;
    url: string;
  };
  membership: {
    fatherIdImage?: string;
    birthCertificateImage?: string;
    personalPhotos: string[];
    utilityBillImage?: string;
    phone?: string;
    firstTimePrice: number;
    renewalPrice: number;
  };
  sportsActivities: { _id: string; name: string }[];
  socialActivities: { _id: string; name: string }[];
  artActivities: { _id: string; name: string }[];
};

export type CentersData = {
  success: boolean;
  Centers: CenterType[];
};

const CentersPage = async () => {
  const { success, Centers }: CentersData = await fetchAllCenters();

  if (!success) {
    toast.error("حدث خطأ أثناء تحميل المراكز", {
      style: {
        backgroundColor: "#8B0000",
        color: "#fff",
        borderColor: "#8B0000",
      },
    });
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
        <p className="text-red-600 text-lg font-semibold mb-2">
          خطأ في تحميل المراكز
        </p>
        <p className="text-gray-600">يرجى المحاولة مرة أخرى لاحقاً</p>
      </div>
    );
  }

  if (!Centers || Centers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
        <p className="text-lg">لا توجد مراكز متاحة حالياً</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {Centers.map((center) => (
        <CenterCardBoxs key={center._id} data={center} />
      ))}
    </div>
  );
};

export default CentersPage;
