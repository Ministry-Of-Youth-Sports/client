"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import AlertDialogBox from "../../global/AlertDialogBox";
import { fetchDeleteNews } from "@/utils/news/fetchDeleteNews";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { articleType } from "@/app/dashboard-admin/news/page";

import UpdateNewForm from "./UpdateNewForm";

const NewsCardBoxs = ({
  data: { title, content, formattedDate, image, _id, socialLink },
}: {
  data: articleType;
}) => {
  // get the user token---
  const { token } = useAuth();
  const { refresh } = useRouter();

  const deleteHandler = async () => {
    const { message, success }: { success: boolean; message: string } =
      await fetchDeleteNews({ id: _id, token });

    if (!success)
      toast.error(
        message === "News not found"
          ? "لا يوجد خبر بهذا الاسم"
          : "حدث خطاء في حذف الخبر"
      );
    else {
      toast("تم حذف الخبر بنجاح");
    }

    // update the page---
    refresh();
  };

  return (
    <Card className="justify-between" dir="rtl">
      <CardHeader>
        <CardTitle className="mb-4 leading-6">{title}</CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
        <CardAction>
          {socialLink ? (
            <Link href={socialLink}>رابط الخبر</Link>
          ) : (
            "لا يوجد رابط"
          )}
        </CardAction>
      </CardHeader>
      <CardContent>
        <Image
          className="mb-6 w-full rounded-3xl"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 mt-4">
        <AlertDialogBox
          onAction={deleteHandler}
          text={"حذف"}
          className={`cursor-pointer ${buttonVariants({
            variant: "destructive",
          })} text-white hover:!bg-red-500`}
        />

        <UpdateNewForm newData={{ title, content, image, socialLink, _id }} />
      </CardFooter>
    </Card>
  );
};

export default NewsCardBoxs;
