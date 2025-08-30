"use client";

import { articleType } from "@/app/dashboard-admin/news/page";
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
import {
  UpdateNewsForm,
  UpdateNewsSchema,
} from "@/lib/validations/NewsCrudSchema";
import { useAuth } from "@/providers/AuthProvider";
import { fetchUpdateNews } from "@/utils/news/fetchUpdateNews";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateNewForm = ({
  newData: { _id, content, socialLink, title },
}: {
  newData: articleType;
}) => {
  const { token } = useAuth();

  const { refresh } = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<UpdateNewsForm>({
    resolver: zodResolver(UpdateNewsSchema),
    defaultValues: {
      title: title || "",
      content: content || "",
      image: undefined,
      socialLink: socialLink || "",
    },
  });

  const handelNewsUpdate = async (formData: UpdateNewsForm) => {
    const { success, message } = await fetchUpdateNews({
      newData: formData,
      token,
      newId: _id,
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

    toast("تم تعديل الخبر بنجاح");

    // Close the dialog
    setIsOpen(false);

    // send user to news page------------------
    refresh();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-700 cursor-pointer text-white hover:bg-green-600">
          تعديل
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-white">تعديل الخبر</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handelNewsUpdate)}>
          <div className="grid gap-4 text-white">
            <div className="grid gap-3">
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
                <p className="text-red-400 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              <label htmlFor="content" className="mb-4 block">
                ادخل الوصف
              </label>
              <Textarea
                id="content"
                placeholder=" ادخل الوصف"
                className="border-muted-foreground max-w-full max-h-[200px] rezize-none"
                {...register("content")}
              />
              {errors.content && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.content.message}
                </p>
              )}
            </div>

            <div className="grid gap-3">
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

            <div className="grid gap-3">
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
              {isSubmitting ? "جاري تعديل الخبر" : "تعديل الخبر"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateNewForm;
