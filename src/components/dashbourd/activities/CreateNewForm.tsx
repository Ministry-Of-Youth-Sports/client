"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CreateNewsForm,
  CreateNewsSchema,
} from "@/lib/validations/NewsCrudSchema";
import { useAuth } from "@/providers/AuthProvider";
import { fetchCreateNews } from "@/utils/news/fetchCreateNews";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateNewForm = () => {
  const { token } = useAuth();

  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CreateNewsForm>({
    resolver: zodResolver(CreateNewsSchema),
    defaultValues: {
      title: "",
      content: "",
      image: undefined,
      socialLink: "",
    },
  });

  const handelNewsCreate = async (formData: CreateNewsForm) => {
    const { success, message } = await fetchCreateNews({
      newData: formData,
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

    toast(message);

    // send user to news page
    push("/dashboard-admin/news");
  };

  return (
    <form
      onSubmit={handleSubmit(handelNewsCreate)}
      dir="rtl"
      className="border-muted-foreground overflow-y-scroll h-[500px] text-white border-[1px] rounded-2xl p-8 min-w-[200px] sm:min-w-[600px] lg:max-w-[80%] bg-card [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-thumb]:hidden
    dark:[&::-webkit-scrollbar-track]:hidden"
    >
      <h1 className="text-2xl text-center mb-14"> انشاء الخبر</h1>

      <div className="mb-8">
        <label htmlFor="title" className="mb-4 block">
          العنوان
        </label>
        <Input
          id="title"
          type="text"
          placeholder="ادخل العنوان"
          className="border-muted-foreground"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="mb-8">
        <label htmlFor="content" className="mb-4 block">
          ادخل الوصف
        </label>
        <Textarea
          id="content"
          placeholder=" ادخل الوصف"
          className="border-muted-foreground max-w-full max-h-[200px]"
          {...register("content")}
        />
        {errors.content && (
          <p className="text-red-400 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      <div className="mb-8">
        <label htmlFor="link" className="mb-4 block">
          رابط الخبر
        </label>
        <Input
          id="link"
          type="text"
          placeholder="رابط الخبر"
          className="border-muted-foreground"
          {...register("socialLink")}
        />
        {errors.socialLink && (
          <p className="text-red-400 text-sm mt-1">
            {errors.socialLink.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <label htmlFor="image" className="mb-4 block">
          ملف الصورة
        </label>
        <Input
          id="image"
          type="file"
          placeholder="ملف الصورة"
          className="border-muted-foreground"
          {...register("image")}
        />
        {errors.image?.message && (
          <p className="text-red-400 text-sm mt-1">
            {String(errors.image.message)}
          </p>
        )}
      </div>

      <Button
        disabled={isSubmitting}
        className="w-full mt-8 cursor-pointer"
        variant={"secondary"}
      >
        {isSubmitting ? "جاري انشاء الخبر" : "انشاء الخبر"}
      </Button>
    </form>
  );
};

export default CreateNewForm;
