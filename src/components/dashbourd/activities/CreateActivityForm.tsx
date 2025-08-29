"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CraeteActivitySchema } from "@/lib/validations/CraeteActivitySchema";
import {
  CreateNewsForm,
  CreateNewsSchema,
} from "@/lib/validations/NewsCrudSchema";
import { useAuth } from "@/providers/AuthProvider";
import { fetchCreateActivity } from "@/utils/activities/fetchCreateActivity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateActivityForm = () => {
  const { token } = useAuth();

  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CraeteActivitySchema>({
    resolver: zodResolver(CraeteActivitySchema),
    defaultValues: {
      projectName: "",
      coordinatorName: "",
      phoneNumber: "",
      location: "",
      date: "",
      time: "",
      daysCount: 0,
      participantsCount: 0,
      targetAge: { min: 0, max: 0 },
      gender: "بنين",
      accessType: "الأعضاء فقط",
      notes: "",
      status: "مجدول",
      ageRange: "",
      duration: "",
    },
  });

  const handelActivityCreate = async (formData: CraeteActivitySchema) => {
    console.log(formData);

    // const { success, message } = await fetchCreateActivity({
    //   activityData: formData,
    //   token,
    // });

    // if (!success) {
    //   toast.error(message, {
    //     style: {
    //       backgroundColor: "#8B0000",
    //       color: "#fff",
    //       borderColor: "#8B0000",
    //     },
    //   });
    //   return;
    // }

    // toast(message);

    // // send user to news page
    // push("/dashboard-admin/activities");
  };

  const inputs: Array<{
    name: keyof CraeteActivitySchema;
    type: string;
    placeholder: string;
    label: string;
  }> = [
    {
      name: "projectName",
      type: "text",
      placeholder: "ادخل اسم النشاط",
      label: "اسم النشاط",
    },
    {
      name: "coordinatorName",
      type: "text",
      placeholder: "ادخل اسم المسئول",
      label: "اسم المسئول",
    },
    {
      name: "phoneNumber",
      type: "number",
      placeholder: "ادخل رقم الهاتف",
      label: "رقم الهاتف",
    },
    {
      name: "location",
      type: "text",
      placeholder: "ادخل الموقع",
      label: "الموقع",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(handelActivityCreate)}
      dir="rtl"
      className="border-muted-foreground overflow-y-scroll h-[500px] text-white border-[1px] rounded-2xl p-8 min-w-[200px] sm:min-w-[600px] lg:max-w-[80%] bg-card [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-thumb]:hidden
    dark:[&::-webkit-scrollbar-track]:hidden"
    >
      <h1 className="text-2xl text-center mb-14"> انشاء النشاط</h1>

      {inputs.map((input) => (
        <div className="mb-8" key={input.name}>
          <label htmlFor={input.name} className="mb-4 block">
            {input.label}
          </label>
          <Input
            id={input.name}
            type={input.type}
            placeholder={input.placeholder}
            className="border-muted-foreground"
            {...register(input.name)}
          />
          {errors[input.name] && (
            <p className="text-red-400 text-sm mt-1">
              {errors[input.name]?.message}
            </p>
          )}
        </div>
      ))}

      <Button
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
