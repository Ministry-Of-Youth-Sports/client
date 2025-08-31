"use client";

import { ActivityTypes } from "@/app/dashboard-admin/centers/details/[id]/page";
import { CenterType } from "@/app/dashboard-admin/centers/page";
import MultiSelectorBox from "@/components/global/MultiSelector";
import { SelectBox } from "@/components/global/SelectBox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  UpdateCenterFormType,
  UpdateCenterSchema,
} from "@/lib/validations/CentersCrudScheam";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { fetchUpdateCenter } from "@/utils/centers/fetchUpdateCenter";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

type UpdateCenterFormProps = {
  defaultOptions: {
    sportsActivities: CenterType["sportsActivities"];
    artActivities: CenterType["artActivities"];
    socialActivities: CenterType["socialActivities"];
  };
  activityTypes: ActivityTypes["data"];
  centerData: CenterType;
};

const UpdateCenterForm = ({
  defaultOptions: { sportsActivities, artActivities, socialActivities },
  activityTypes: { sports, art, social },
  centerData: {
    _id,
    LocationArea,
    address,
    facebookLink,
    location,
    membership,
    name,
    phone,
    region,
  },
}: UpdateCenterFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UpdateCenterFormType>({
    resolver: zodResolver(UpdateCenterSchema),
    defaultValues: {
      name: name || "",
      phone: phone || "",
      address: address || "",
      region: region || "",
      LocationArea:
        (LocationArea as UpdateCenterFormType["LocationArea"]) ||
        "المنطقة الشمالية",
      facebookLink: facebookLink || "",
      location: location || "",
      firstTimePrice: membership?.firstTimePrice || 0,
      renewalPrice: membership?.renewalPrice || 0,
      sportsActivities: sportsActivities?.map((s) => s._id) || [],
      artActivities: artActivities?.map((a) => a._id) || [],
      socialActivities: socialActivities?.map((s) => s._id) || [],
    },
  });

  const { token } = useAuth();
  const { refresh } = useRouter();

  const handleOnSubmit = async (data: UpdateCenterFormType) => {
    const { success, message } = await fetchUpdateCenter({
      centerData: data,
      token,
      id: _id,
    });

    if (!success) {
      toast.error(message, {
        style: {
          backgroundColor: "#8B0000",
          color: "#fff",
          borderColor: "#8B0000",
        },
      });
      return;
    }

    toast.success("تم تعديل بيانات المركز بنجاح");

    // Refresh the page
    refresh();
  };

  return (
    <form
      className="w-full bg-card min-h-[500px] p-8 rounded-lg shadow-lg mt-10"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <h2 className="text-center text-2xl font-bold mb-4 text-white">
        تعديل بيانات المركز
      </h2>

      <div className="space-y-8">
        {/* Basic Information Row 1 */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-white space-y-4 mt-4 flex-1">
            <label className="mr-1 block" htmlFor="name">
              اسم المركز
            </label>
            <Input
              id="name"
              type="text"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="text-white space-y-4 mt-4 flex-1">
            <label className="mr-1 block" htmlFor="phone">
              الرقم
            </label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="text-white space-y-4 mt-4 flex-1">
            <label className="mr-1 block" htmlFor="address">
              العنوان
            </label>
            <Input
              id="address"
              type="text"
              {...register("address")}
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
        </div>

        {/* Basic Information Row 2 */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-white space-y-4 mt-4 flex-1">
            <label className="mr-1 block" htmlFor="region">
              الدايرة
            </label>
            <Input
              id="region"
              type="text"
              {...register("region")}
              className={errors.region ? "border-red-500" : ""}
            />
            {errors.region && (
              <p className="text-red-500 text-sm">{errors.region.message}</p>
            )}
          </div>

          <div className="text-white space-y-4 mt-4 flex-1">
            <label className="mr-1 block">المنطقة</label>
            <Controller
              name="LocationArea"
              control={control}
              render={({ field: { onChange, value } }) => (
                <SelectBox
                  label="المنطقة"
                  boxes={[
                    "المنطقة الشمالية",
                    "المنطقة الجنوبية",
                    "المنطقة الشرقية",
                    "المنطقة الغربية",
                  ]}
                  value={value}
                  onValueChange={onChange}
                />
              )}
            />
            {errors.LocationArea && (
              <p className="text-red-500 text-sm">
                {errors.LocationArea.message}
              </p>
            )}
          </div>
        </div>

        {/* Links Row */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-white space-y-4 mt-4 flex-1">
            <label className="mr-1 block" htmlFor="facebookLink">
              رابط الفيسبوك
            </label>
            <Input
              id="facebookLink"
              type="url"
              placeholder="https://facebook.com/your-page"
              {...register("facebookLink")}
              className={errors.facebookLink ? "border-red-500" : ""}
            />
            {errors.facebookLink && (
              <p className="text-red-500 text-sm">
                {errors.facebookLink.message}
              </p>
            )}
          </div>

          <div className="text-white space-y-4 mt-4 flex-1">
            <label className="mr-1 block" htmlFor="location">
              رابط الموقع
            </label>
            <Input
              id="location"
              type="url"
              placeholder="https://maps.google.com/..."
              {...register("location")}
              className={errors.location ? "border-red-500" : ""}
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>
        </div>

        {/* Image Upload */}
        <div className="text-white space-y-4 mt-4 flex-1">
          <label className="mr-1 block" htmlFor="image">
            الصورة
          </label>
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <Input
                id="image"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                }}
                className={errors.image ? "border-red-500" : ""}
                {...field}
              />
            )}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Membership Section */}
        <div className="text-white mt-14">
          <h3 className="text-white font-normal mb-8 text-2xl text-center">
            العضوية
          </h3>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-4 flex-1">
              <label className="mr-1 block" htmlFor="firstTimePrice">
                سعر العضوية
              </label>
              <Input
                id="firstTimePrice"
                type="number"
                min="1"
                max="10000"
                {...register("firstTimePrice", { valueAsNumber: true })}
                className={errors.firstTimePrice ? "border-red-500" : ""}
              />
              {errors.firstTimePrice && (
                <p className="text-red-500 text-sm">
                  {errors.firstTimePrice.message}
                </p>
              )}
            </div>

            <div className="space-y-4 flex-1">
              <label className="mr-1 block" htmlFor="renewalPrice">
                سعر التجديد
              </label>
              <Input
                id="renewalPrice"
                type="number"
                min="1"
                max="10000"
                {...register("renewalPrice", { valueAsNumber: true })}
                className={errors.renewalPrice ? "border-red-500" : ""}
              />
              {errors.renewalPrice && (
                <p className="text-red-500 text-sm">
                  {errors.renewalPrice.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="text-white mt-14 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-white font-normal mb-8 text-2xl">
              الانشطة الرياضية
            </h3>
            <Controller
              name="sportsActivities"
              control={control}
              render={({ field: { value, onChange } }) => (
                <MultiSelectorBox
                  placeholder="انشطة رياضية"
                  options={sports || []}
                  defaultValues={sportsActivities || []}
                  value={value}
                  onSelectionChange={onChange}
                />
              )}
            />
            {errors.sportsActivities && (
              <p className="text-red-500 text-sm mt-2">
                {errors.sportsActivities.message}
              </p>
            )}
          </div>

          <div>
            <h3 className="text-white font-normal mb-8 text-2xl">
              الانشطة الفنية
            </h3>
            <Controller
              name="artActivities"
              control={control}
              render={({ field: { value, onChange } }) => (
                <MultiSelectorBox
                  placeholder="انشطة فنية"
                  options={art || []}
                  defaultValues={artActivities || []}
                  value={value}
                  onSelectionChange={onChange}
                />
              )}
            />
            {errors.artActivities && (
              <p className="text-red-500 text-sm mt-2">
                {errors.artActivities.message}
              </p>
            )}
          </div>

          <div>
            <h3 className="text-white font-normal mb-8 text-2xl">
              الانشطة الاجتماعية
            </h3>
            <Controller
              name="socialActivities"
              control={control}
              render={({ field: { value, onChange } }) => (
                <MultiSelectorBox
                  placeholder="انشطة اجتماعية"
                  options={social || []}
                  defaultValues={socialActivities || []}
                  value={value}
                  onSelectionChange={onChange}
                />
              )}
            />
            {errors.socialActivities && (
              <p className="text-red-500 text-sm mt-2">
                {errors.socialActivities.message}
              </p>
            )}
          </div>
        </div>

        {/* Global form errors */}
        {errors.root && (
          <div className="text-red-500 text-sm text-center bg-red-100 p-3 rounded">
            {errors.root.message}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer w-full text-lg py-8 px-6"
        >
          {isSubmitting ? "جاري الحفظ..." : "حفظ التعديلات"}
        </Button>
      </div>
    </form>
  );
};

export default UpdateCenterForm;
