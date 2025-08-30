import { z } from "zod";

const egyptPhoneRegex = /^(\+2)?01[0-25][0-9]{8}$/;

export const CreateActivitySchema = z.object({
  projectName: z.string().min(1, "اسم المشروع مطلوب"),
  coordinatorName: z.string().min(1, "اسم المنسق مطلوب"),
  phoneNumber: z
    .string()
    .min(1, "رقم الهاتف مطلوب")
    .regex(egyptPhoneRegex, "يرجى إدخال رقم تلفون صحيح مثل 01012345678"),
  location: z.string().min(1, "الموقع مطلوب"),
  date: z
    .string()
    .min(1, "التاريخ مطلوب")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "صيغة التاريخ يجب أن تكون YYYY-MM-DD"),
  time: z
    .string()
    .min(1, "الوقت مطلوب")
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "صيغة الوقت يجب أن تكون HH:mm"),
  daysCount: z
    .number()
    .min(1, "عدد الأيام مطلوب")
    .int("عدد الأيام يجب أن يكون رقمًا صحيحًا")
    .positive("عدد الأيام يجب أن يكون رقمًا موجبًا"),
  participantsCount: z
    .number()
    .min(1, "عدد المشاركين مطلوب")
    .int("عدد المشاركين يجب أن يكون رقمًا صحيحًا")
    .positive("عدد المشاركين يجب أن يكون رقمًا موجبًا"),
  minAge: z
    .number()
    .min(1, "الحد الأدنى للسن مطلوب")
    .int("الحد الأدنى للسن يجب أن يكون رقمًا صحيحًا")
    .positive("الحد الأدنى للسن يجب أن يكون رقمًا موجبًا"),
  maxAge: z
    .number()
    .min(1, "الحد الأقصى للسن مطلوب")
    .int("الحد الأقصى للسن يجب أن يكون رقمًا صحيحًا")
    .positive("الحد الأقصى للسن يجب أن يكون رقمًا موجبًا"),
  gender: z.enum(["بنين", "بنات", "مختلط"]),
  accessType: z.enum(["الأعضاء فقط", "للجميع"]),
  notes: z.string().min(1, "الملاحظات مطلوبة").optional(),
  status: z.enum(["مجدول", "جاري", "ملغي"]),
});

export const UpdateActivitySchema = z.object({
  projectName: z.string().min(1, "اسم المشروع مطلوب"),
  coordinatorName: z.string().min(1, "اسم المنسق مطلوب"),
  phoneNumber: z
    .string()
    .min(1, "رقم الهاتف مطلوب")
    .regex(egyptPhoneRegex, "يرجى إدخال رقم تلفون صحيح مثل 01012345678"),
  location: z.string().min(1, "الموقع مطلوب"),
  date: z
    .string()
    .min(1, "التاريخ مطلوب")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "صيغة التاريخ يجب أن تكون YYYY-MM-DD"),
  time: z
    .string()
    .min(1, "الوقت مطلوب")
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "صيغة الوقت يجب أن تكون HH:mm"),
  daysCount: z
    .number()
    .min(1, "عدد الأيام مطلوب")
    .int("عدد الأيام يجب أن يكون رقمًا صحيحًا")
    .positive("عدد الأيام يجب أن يكون رقمًا موجبًا"),
  participantsCount: z
    .number()
    .min(1, "عدد المشاركين مطلوب")
    .int("عدد المشاركين يجب أن يكون رقمًا صحيحًا")
    .positive("عدد المشاركين يجب أن يكون رقمًا موجبًا"),
  minAge: z
    .number()
    .min(1, "الحد الأدنى للسن مطلوب")
    .int("الحد الأدنى للسن يجب أن يكون رقمًا صحيحًا")
    .positive("الحد الأدنى للسن يجب أن يكون رقمًا موجبًا"),
  maxAge: z
    .number()
    .min(1, "الحد الأقصى للسن مطلوب")
    .int("الحد الأقصى للسن يجب أن يكون رقمًا صحيحًا")
    .positive("الحد الأقصى للسن يجب أن يكون رقمًا موجبًا"),
  gender: z.enum(["بنين", "بنات", "مختلط"]),
  accessType: z.enum(["الأعضاء فقط", "للجميع"]),
  notes: z.string().min(1, "الملاحظات مطلوبة").optional(),
  status: z.enum(["مجدول", "جاري", "ملغي"]),
});

export type CreateActivityFormType = z.infer<typeof CreateActivitySchema>;
export type UpdateActivityFormType = z.infer<typeof UpdateActivitySchema>;
