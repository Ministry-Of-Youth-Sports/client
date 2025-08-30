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
import { buttonVariants } from "../../ui/button";
import AlertDialogBox from "../../global/AlertDialogBox";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

import { ActivityType } from "@/app/dashboard-admin/activities/page";
import moment from "moment";
import { fetchDeleteActivity } from "@/utils/activities/fetchDeleteActivity";
import UpdateActivityFormComponent from "./UpdateActivityForm";

const ActivitiesCardBoxs = ({
  data: {
    _id,
    projectName,
    ageRange,
    coordinatorName,
    location,
    gender,
    accessType,
    date,
    daysCount,
    participantsCount,
    phoneNumber,
    status,
    time,
    duration,
    notes,
    targetAge,
  },
}: {
  data: ActivityType;
}) => {
  // get the user token---
  const { token } = useAuth();
  const { refresh } = useRouter();

  const deleteHandler = async () => {
    const { message, success }: { success: boolean; message: string } =
      await fetchDeleteActivity({ id: _id, token });

    if (!success) toast.error(message);
    else toast.success("تم حذف النشاط بنجاح");

    // update the page---
    refresh();
  };

  return (
    <Card className="justify-between" dir="rtl">
      <CardHeader>
        <CardTitle className="mb-4 leading-6">{projectName}</CardTitle>
        <CardDescription>
          <span className="mr-2">
            تاريخ النشاط: {moment(date).format("DD-MM-YYYY")}
          </span>
        </CardDescription>
        <CardAction>
          <p>الحالة : {status}</p>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h3>اسم المشرف : {coordinatorName}</h3>
        <p>المكان : {location}</p>
        <p>المعاد : {time}</p>
        <p>الجنس : {gender}</p>
        <p>نوع الدخول : {accessType}</p>
        <p>السن : {ageRange}</p>
        <p>المدة : {duration}</p>
        <p>عدد ايام النشاط : {daysCount}</p>
        <p>عدد المشاركين : {participantsCount}</p>
        <p>رقم الهاتف : {phoneNumber}</p>
        <p>ملاحظات : {notes || "لا توجد ملاحظات"}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 mt-4">
        <AlertDialogBox
          onAction={deleteHandler}
          text={"حذف"}
          className={`cursor-pointer ${buttonVariants({
            variant: "destructive",
          })} text-white hover:!bg-red-500`}
        />

        <UpdateActivityFormComponent
          activityData={{
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
            status,
            targetAge: targetAge || { min: 0, max: 0 },
            time,
            ageRange,
            notes: notes || "",
            duration,
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default ActivitiesCardBoxs;
