import { fetchCenter } from "@/utils/centers/fetchCenter";
import { CenterType } from "../../page";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Brush, Trophy, Users } from "lucide-react";
import UpdateCenterForm from "@/components/dashbourd/centers/UpdateCenterForm";
import { fetchActivityTypes } from "@/utils/centers/fetchActivityTypes";

type CenterDetails = {
  success: boolean;
  Centers: CenterType;
};

export type ActivityTypes = {
  success: boolean;
  data: {
    sports: { _id: string; name: string }[];
    social: { _id: string; name: string }[];
    art: { _id: string; name: string }[];
  };
};

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // get the center data------
  const { success: centerSuccess, Centers }: CenterDetails = await fetchCenter(
    id
  );

  // get the activity Types data------
  const { data: activityTypes }: ActivityTypes = await fetchActivityTypes();

  if (!centerSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
        <p className="text-red-600 text-lg font-semibold mb-2">
          خطأ في تحميل بيانات المركز
        </p>
        <p>يرجى المحاولة مرة أخرى لاحقاً</p>
      </div>
    );
  }

  const {
    name,
    LocationArea,
    address,
    image,
    location,
    membership,
    artActivities,
    phone,
    region,
    socialActivities,
    sportsActivities,
    facebookLink,
  } = Centers;

  return (
    <div className="p-8" dir="rtl">
      <h1 className="text-5xl text-white">{name}</h1>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 mt-16">
        <div className="flex flex-col gap-4">
          <p className="text-lg text-stone-200">
            <span className="font-semibold">العنوان:</span> {address}
          </p>

          <p className="text-lg text-stone-200">
            <span className="font-semibold">المنطقة:</span> {LocationArea} -{" "}
            {region}
          </p>

          <p className="text-lg text-stone-200">
            <span className="font-semibold">الموقع:</span>{" "}
            <Link className="hover:underline" href={location} target="_blank">
              {location}
            </Link>
          </p>

          <p className="text-lg text-stone-200">
            <span className="font-semibold">الرقم:</span> {phone}
          </p>

          {facebookLink && (
            <p className="text-lg text-stone-200">
              <span className="font-semibold">الفيسبوك:</span>{" "}
              <Link
                className="hover:underline"
                href={facebookLink}
                target="_blank"
              >
                رابط الفيسبوك
              </Link>
            </p>
          )}

          <div className="mt-4 flex flex-col gap-2 text-stone-200">
            <h3 className="text-2xl text-white">العضوية</h3>
            <p>سعر العضوية : {membership.firstTimePrice}ج</p>
            <p>سعر التجديد : {membership.renewalPrice}ج</p>
          </div>
        </div>

        {image && (
          <Image
            src={image.url}
            alt={name}
            width={500}
            height={400}
            className="rounded-lg w-auto h-auto"
            priority
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        <div className="mt-16 bg-card p-8 rounded-2xl">
          <h3 className="text-2xl text-white mb-7 flex items-center gap-2">
            <Trophy size={25} /> الانشطة الرياضية
          </h3>

          {sportsActivities.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {sportsActivities.map((sport) => (
                <Badge
                  key={sport._id}
                  variant="secondary"
                  className="text-md bg-white py-2 px-3 text-black font-normal hover:scale-105 duration-300 transition-transform"
                >
                  {sport.name}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-lg text-white">لا يوجد</p>
          )}
        </div>

        <div className="mt-16 bg-card p-8 rounded-2xl">
          <h3 className="text-2xl text-white mb-7 flex items-center gap-2">
            <Brush size={25} />
            الانشطة الفنية
          </h3>

          {artActivities.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {artActivities.map((art) => (
                <Badge
                  key={art._id}
                  variant="secondary"
                  className="text-md bg-emerald-700 py-2 px-3 text-white font-normal hover:scale-105 duration-300 transition-transform"
                >
                  {art.name}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-lg text-white">لا يوجد</p>
          )}
        </div>

        <div className="mt-16 bg-card p-8 rounded-2xl">
          <h3 className="text-2xl text-white mb-7 flex items-center gap-2">
            <Users size={25} />
            الانشطة الاجتماعية
          </h3>

          {socialActivities.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {socialActivities.map((social) => (
                <Badge
                  key={social._id}
                  variant="secondary"
                  className="text-md bg-emerald-700 py-2 px-3 text-white font-normal hover:scale-105 duration-300 transition-transform"
                >
                  {social.name}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-lg text-white">لا يوجد</p>
          )}
        </div>
      </div>

      <UpdateCenterForm
        centerData={Centers}
        activityTypes={activityTypes}
        defaultOptions={{ sportsActivities, artActivities, socialActivities }}
      />
    </div>
  );
};

export default DetailsPage;
