import { z } from "zod";

export const CraeteActivitySchema = z.object({
  projectName: z.string().min(1, "اسم المشروع مطلوب"),
  coordinatorName: z.string().min(1, "اسم المنسق مطلوب"),
  phoneNumber: z.string().regex(/^(\+?\d{10,15})$/, "رقم الهاتف غير صالح"), // simple phone check
  location: z.string().min(1, "الموقع مطلوب"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "صيغة التاريخ يجب أن تكون YYYY-MM-DD"),
  time: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "صيغة الوقت يجب أن تكون HH:mm"),
  daysCount: z
    .number()
    .int()
    .nonnegative("عدد الأيام يجب أن يكون رقمًا صحيحًا موجبًا"),
  participantsCount: z
    .number()
    .int()
    .nonnegative("عدد المشاركين يجب أن يكون رقمًا صحيحًا موجبًا"),
  targetAge: z.object({
    min: z.number().int().nonnegative("الحد الأدنى للعمر غير صالح"),
    max: z
      .number()
      .int()
      .nonnegative("الحد الأقصى للعمر غير صالح")
      .refine((val, ctx) => val >= ctx.parent.min, {
        message: "الحد الأقصى يجب أن يكون أكبر من أو يساوي الحد الأدنى",
      }),
  }),
  gender: z.enum(["بنين", "بنات", "مختلط"]),
  accessType: z.enum(["الأعضاء فقط", "للجميع"]),
  notes: z.string().optional(),
  status: z.enum(["مجدول", "جاري", "ملغي"]),
  ageRange: z.string().optional(),
  duration: z.string().optional(),
});

export type CraeteActivitySchema = z.infer<typeof CraeteActivitySchema>;
