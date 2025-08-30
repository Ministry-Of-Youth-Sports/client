"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type AlertDialogBoxProps = {
  text: string;
  className?: string;
  onAction?: () => void;
};

const AlertDialogBox = ({ text, className, onAction }: AlertDialogBoxProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={className}>{text}</AlertDialogTrigger>
      <AlertDialogContent className="bg-card-foreground">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            هل أنت متأكد من الحذف؟
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>الغاء</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>حذف</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogBox;
