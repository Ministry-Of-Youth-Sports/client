import { UpdateActivityFormType } from "@/lib/validations/ActivityCrudSchema";

const inputs: Array<{
  name: keyof UpdateActivityFormType;
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
    type: "text",
    placeholder: "ادخل رقم الهاتف",
    label: "رقم الهاتف",
  },
  {
    name: "location",
    type: "text",
    placeholder: "ادخل الموقع",
    label: "الموقع",
  },
  {
    name: "date",
    type: "date",
    placeholder: "ادخل التاريخ",
    label: "التاريخ",
  },
  {
    name: "time",
    type: "time",
    placeholder: "ادخل الوقت",
    label: "الوقت",
  },
  {
    name: "daysCount",
    type: "number",
    placeholder: "ادخل عدد الايام",
    label: "عدد الايام",
  },
  {
    name: "participantsCount",
    type: "number",
    placeholder: "ادخل عدد المشاركين",
    label: "عدد المشاركين",
  },
  {
    name: "minAge",
    type: "number",
    placeholder: "ادخل العمر الادني",
    label: "العمر الادني",
  },
  {
    name: "maxAge",
    type: "number",
    placeholder: "ادخل العمر الاقصي",
    label: "العمر الاقصي",
  },
  {
    name: "gender",
    type: "select",
    placeholder: "ادخل الجنس",
    label: "الجنس",
  },
  {
    name: "accessType",
    type: "select",
    placeholder: "ادخل نوع الوصول",
    label: "نوع الوصول",
  },
  {
    name: "status",
    type: "select",
    placeholder: "ادخل الملاحظات",
    label: "الحالة",
  },
  {
    name: "notes",
    type: "textarea",
    placeholder: "ادخل الملاحظات",
    label: "الملاحظات",
  },
];

export { inputs };
