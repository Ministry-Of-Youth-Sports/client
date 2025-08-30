"use client";

import { SelectBox } from "@/components/global/SelectBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { inputs } from "@/constants/dashboard_data";
import {
  CreateActivityForm as CreateActivityFormType,
  CreateActivitySchema,
} from "@/lib/validations/CreateActivitySchema";
import { useAuth } from "@/providers/AuthProvider";
import { fetchCreateActivity } from "@/utils/activities/fetchCreateActivity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, Controller, FieldError } from "react-hook-form";
import { toast } from "sonner";

type InputConfig = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
};

const CreateActivityForm = () => {
  const { token } = useAuth();
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateActivityFormType>({
    resolver: zodResolver(CreateActivitySchema),
    defaultValues: {
      projectName: "",
      coordinatorName: "",
      phoneNumber: 0,
      location: "",
      date: "",
      time: "",
      daysCount: 0,
      participantsCount: 0,
      minAge: 0,
      maxAge: 0,
      gender: "بنين",
      accessType: "الأعضاء فقط",
    },
  });

  const handelActivityCreate = async (formData: CreateActivityFormType) => {
    // format data---
    const formatedData = {
      ...formData,
      targetAge: {
        min: formData.minAge,
        max: formData.maxAge,
      },
    };

    const { success, message } = await fetchCreateActivity({
      activityData: formatedData,
      token,
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

    toast.success(message);

    // send user to activities page
    push("/dashboard-admin/activities");
  };

  return (
    <form
      onSubmit={handleSubmit(handelActivityCreate)}
      className="border-muted-foreground relative overflow-y-auto h-[500px] text-white border-[1px] rounded-2xl p-8 min-w-[200px] sm:min-w-[600px] lg:max-w-[80%] bg-card [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:hidden dark:[&::-webkit-scrollbar-track]:hidden"
    >
      <h1 className="text-2xl text-center mb-14">انشاء النشاط</h1>

      {(inputs as InputConfig[]).map(({ label, name, placeholder, type }) =>
        type === "select" ? (
          <div key={name} className="mb-8">
            <label dir="rtl" htmlFor={name} className="mb-4 block">
              {label}
            </label>
            <Controller
              name={name as keyof CreateActivityFormType}
              control={control}
              render={({ field: { onChange, value } }) => (
                <SelectBox
                  label={label}
                  boxes={
                    label === "الجنس"
                      ? ["بنين", "بنات", "مختلط"]
                      : ["الأعضاء فقط", "للجميع"]
                  }
                  value={value as string}
                  onValueChange={onChange}
                />
              )}
            />
            {errors[name as keyof CreateActivityFormType] && (
              <p className="text-red-400 text-sm mt-1">
                {
                  (errors[name as keyof CreateActivityFormType] as FieldError)
                    ?.message
                }
              </p>
            )}
          </div>
        ) : type === "textarea" ? (
          <div dir="rtl" className="mb-8" key={name}>
            <label htmlFor={name} className="mb-4 block">
              {label}
            </label>
            <Textarea
              id={name}
              placeholder={placeholder}
              className="border-muted-foreground max-w-full max-h-[200px] resize-none"
              {...register(name as keyof CreateActivityFormType)}
            />
            {errors[name as keyof CreateActivityFormType] && (
              <p className="text-red-400 text-sm mt-1">
                {
                  (errors[name as keyof CreateActivityFormType] as FieldError)
                    ?.message
                }
              </p>
            )}
          </div>
        ) : (
          <div dir="rtl" className="mb-8" key={name}>
            <label htmlFor={name} className="mb-4 block">
              {label}
            </label>
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              className="border-muted-foreground"
              {...register(name as keyof CreateActivityFormType, {
                valueAsNumber: type === "number",
              })}
            />
            {errors[name as keyof CreateActivityFormType] && (
              <p className="text-red-400 text-sm mt-1">
                {
                  (errors[name as keyof CreateActivityFormType] as FieldError)
                    ?.message
                }
              </p>
            )}
          </div>
        )
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-8 cursor-pointer"
        variant={"secondary"}
      >
        {isSubmitting ? "جاري انشاء النشاط" : "انشاء النشاط"}
      </Button>
    </form>
  );
};

export default CreateActivityForm;
