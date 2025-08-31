"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/providers/AuthProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, FieldError, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  UpdateActivityFormType,
  UpdateActivitySchema,
} from "@/lib/validations/ActivityCrudSchema";
import { SelectBox } from "@/components/global/SelectBox";
import { fetchUpdateActivity } from "@/utils/activities/fetchUpdateActivity";
import { ActivityType } from "@/app/dashboard-admin/activities/page";
import { inputs } from "@/constants/dashboard_data";
import { formatDateForInput } from "@/utils/formatDateForInput";

const UpdateActivityForm = ({
  activityData: {
    _id,
    accessType,
    coordinatorName,
    date,
    daysCount,
    gender,
    location,
    participantsCount,
    phoneNumber,
    projectName,
    targetAge,
    time,
    notes,
    status,
  },
}: {
  activityData: ActivityType;
}) => {
  const { token } = useAuth();
  const { refresh } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<UpdateActivityFormType>({
    resolver: zodResolver(UpdateActivitySchema),
    defaultValues: {
      projectName: projectName || "",
      coordinatorName: coordinatorName || "",
      phoneNumber: phoneNumber,
      location: location || "",
      date: formatDateForInput(date),
      time: time || "",
      daysCount: daysCount || 0,
      participantsCount: participantsCount || 0,
      minAge: targetAge?.min || 0,
      maxAge: targetAge?.max || 0,
      gender: gender || "بنين",
      accessType: accessType || "الأعضاء فقط",
      notes: notes || "",
      status: status,
    },
  });

  const handelActivityUpdate = async (formData: UpdateActivityFormType) => {
    const { success, message } = await fetchUpdateActivity({
      activityData: formData,
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

    toast.success("تم تعديل النشاط بنجاح");

    // Close the dialog
    setIsOpen(false);

    // Refresh the page
    refresh();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-700 cursor-pointer text-white hover:bg-green-600">
          تعديل
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] bg-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-white">تعديل النشاط</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(handelActivityUpdate)}
          className="overflow-y-auto h-[500px] p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:hidden dark:[&::-webkit-scrollbar-track]:hidden"
        >
          <div className="grid gap-4 text-white">
            {inputs.map(({ label, name, placeholder, type }) =>
              type === "select" ? (
                <div key={name} className="grid gap-3">
                  <label dir="rtl" htmlFor={name} className="mb-4 block">
                    {label}
                  </label>
                  <Controller
                    name={name as keyof UpdateActivityFormType}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <SelectBox
                        label={label}
                        boxes={
                          name === "gender"
                            ? ["بنين", "بنات", "مختلط"]
                            : name === "status"
                            ? ["مجدول", "جاري", "ملغي"]
                            : ["الأعضاء فقط", "للجميع"]
                        }
                        value={value as string}
                        onValueChange={onChange}
                      />
                    )}
                  />
                  {errors[name as keyof UpdateActivityFormType] && (
                    <p className="text-red-400 text-sm mt-1">
                      {
                        (
                          errors[
                            name as keyof UpdateActivityFormType
                          ] as FieldError
                        )?.message
                      }
                    </p>
                  )}
                </div>
              ) : type === "textarea" ? (
                <div dir="rtl" className="grid gap-3" key={name}>
                  <label htmlFor={name} className="mb-4 block">
                    {label}
                  </label>
                  <Textarea
                    id={name}
                    placeholder={placeholder}
                    className="border-muted-foreground max-w-full max-h-[200px] resize-none"
                    {...register(name as keyof UpdateActivityFormType)}
                  />
                  {errors[name as keyof UpdateActivityFormType] && (
                    <p className="text-red-400 text-sm mt-1">
                      {
                        (
                          errors[
                            name as keyof UpdateActivityFormType
                          ] as FieldError
                        )?.message
                      }
                    </p>
                  )}
                </div>
              ) : (
                <div dir="rtl" className="grid gap-3" key={name}>
                  <label htmlFor={name} className="mb-4 block">
                    {label}
                  </label>
                  <Input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    className="border-muted-foreground"
                    {...register(name as keyof UpdateActivityFormType, {
                      valueAsNumber: type === "number",
                    })}
                  />
                  {errors[name as keyof UpdateActivityFormType] && (
                    <p className="text-red-400 text-sm mt-1">
                      {
                        (
                          errors[
                            name as keyof UpdateActivityFormType
                          ] as FieldError
                        )?.message
                      }
                    </p>
                  )}
                </div>
              )
            )}
          </div>
          <DialogFooter className="gap-8 mt-8">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="cursor-pointer"
                type="button"
              >
                اغلاق
              </Button>
            </DialogClose>
            <Button
              disabled={isSubmitting}
              className="cursor-pointer"
              variant={"secondary"}
              type="submit"
            >
              {isSubmitting ? "جاري تعديل النشاط" : "تعديل النشاط"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateActivityForm;
