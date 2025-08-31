import { z } from "zod";

// MongoDB ObjectId regex pattern
const mongoObjectIdRegex = /^[0-9a-fA-F]{24}$/;

// Updated Egyptian phone number regex (more flexible for local numbers)
const egyptianPhoneRegex = /^(\+20|0020|20|0)?[1-9][0-9]{7,9}$/;

// Updated URL validation regex (more comprehensive)
const urlRegex =
  /^https?:\/\/(?:[-\w.])+(?:\:[0-9]+)?(?:\/(?:[\w\/_.])*)?(?:\?(?:[\w&=%.])*)?(?:\#(?:[\w.])*)?$/;

export const UpdateCenterSchema = z
  .object({
    name: z
      .string()
      .min(1, "اسم المركز مطلوب")
      .min(3, "اسم المركز يجب أن يكون على الأقل 3 أحرف")
      .max(100, "اسم المركز يجب أن يكون أقل من 100 حرف")
      .trim(),

    phone: z
      .string()
      .min(1, "رقم الهاتف مطلوب")
      .regex(
        egyptianPhoneRegex,
        "رقم الهاتف غير صحيح. يجب أن يكون رقم مصري صحيح"
      )
      .transform((val) => val.replace(/\s+/g, "")), // Remove spaces

    address: z
      .string()
      .min(1, "العنوان مطلوب")
      .min(10, "العنوان يجب أن يكون على الأقل 10 أحرف")
      .max(200, "العنوان يجب أن يكون أقل من 200 حرف")
      .trim(),

    region: z
      .string()
      .min(1, "الدايرة مطلوبة")
      .min(3, "الدايرة يجب أن تكون على الأقل 3 أحرف")
      .max(100, "الدايرة يجب أن تكون أقل من 100 حرف")
      .trim(),

    LocationArea: z.enum(
      [
        "المنطقة الشمالية",
        "المنطقة الجنوبية",
        "المنطقة الشرقية",
        "المنطقة الغربية",
      ],
      {
        message: "يجب اختيار منطقة صحيحة",
      }
    ),

    facebookLink: z
      .string()
      .optional()
      .or(z.literal(""))
      .refine((url) => {
        if (!url || url === "") return true;
        // More flexible URL validation for Facebook
        return (
          urlRegex.test(url) ||
          /^https?:\/\/(?:www\.)?facebook\.com\/.+/.test(url) ||
          /^https?:\/\/(?:www\.)?fb\.com\/.+/.test(url) ||
          /^https?:\/\/(?:m\.)?facebook\.com\/.+/.test(url)
        );
      }, "رابط الفيسبوك غير صحيح")
      .refine((url) => {
        if (!url || url === "") return true;
        return url.includes("facebook.com") || url.includes("fb.com");
      }, "يجب أن يكون رابط فيسبوك صحيح"),

    location: z
      .string()
      .min(1, "رابط الموقع مطلوب")
      .refine((url) => {
        // More flexible URL validation for Google Maps
        return (
          urlRegex.test(url) ||
          /^https?:\/\/(?:www\.)?(?:maps\.)?google\.com\/.+/.test(url) ||
          /^https?:\/\/maps\.app\.goo\.gl\/.+/.test(url) ||
          /^https?:\/\/goo\.gl\/maps\/.+/.test(url)
        );
      }, "رابط الموقع غير صحيح")
      .refine(
        (url) =>
          url.includes("maps.google.com") ||
          url.includes("maps.app.goo.gl") ||
          url.includes("goo.gl/maps") ||
          url.includes("google.com/maps"),
        "يجب أن يكون رابط خرائط جوجل صحيح"
      ),

    image: z
      .instanceof(File)
      .optional()
      .refine(
        (file) => !file || file.size <= 5 * 1024 * 1024, // 5MB
        "حجم الصورة يجب أن يكون أقل من 5 ميجابايت"
      )
      .refine(
        (file) =>
          !file ||
          ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        "نوع الصورة يجب أن يكون JPEG أو PNG أو WebP"
      ),

    firstTimePrice: z
      .number()
      .positive("سعر العضوية يجب أن يكون أكبر من الصفر")
      .min(1, "سعر العضوية يجب أن يكون على الأقل 1 جنيه")
      .max(10000, "سعر العضوية يجب أن يكون أقل من 10000 جنيه")
      .int("سعر العضوية يجب أن يكون رقم صحيح"),

    renewalPrice: z
      .number()
      .positive("سعر التجديد يجب أن يكون أكبر من الصفر")
      .min(1, "سعر التجديد يجب أن يكون على الأقل 1 جنيه")
      .max(10000, "سعر التجديد يجب أن يكون أقل من 10000 جنيه")
      .int("سعر التجديد يجب أن يكون رقم صحيح"),

    sportsActivities: z
      .array(
        z.string().regex(mongoObjectIdRegex, "معرف النشاط الرياضي غير صحيح")
      )
      .min(0, "يمكن ألا تحتوي على أنشطة رياضية")
      .max(20, "لا يمكن أن تزيد الأنشطة الرياضية عن 20 نشاط"),

    artActivities: z
      .array(z.string().regex(mongoObjectIdRegex, "معرف النشاط الفني غير صحيح"))
      .min(0, "يمكن ألا تحتوي على أنشطة فنية")
      .max(20, "لا يمكن أن تزيد الأنشطة الفنية عن 20 نشاط"),

    socialActivities: z
      .array(
        z.string().regex(mongoObjectIdRegex, "معرف النشاط الاجتماعي غير صحيح")
      )
      .min(0, "يمكن ألا تحتوي على أنشطة اجتماعية")
      .max(20, "لا يمكن أن تزيد الأنشطة الاجتماعية عن 20 نشاط"),
  })
  .refine((data) => data.renewalPrice <= data.firstTimePrice, {
    message: "سعر التجديد يجب أن يكون أقل من أو يساوي سعر العضوية الأولى",
    path: ["renewalPrice"],
  })
  .refine(
    (data) => {
      const totalActivities =
        data.sportsActivities.length +
        data.artActivities.length +
        data.socialActivities.length;
      return totalActivities >= 1;
    },
    {
      message: "يجب أن يحتوي المركز على نشاط واحد على الأقل",
      path: ["sportsActivities"],
    }
  );

export type UpdateCenterFormType = z.infer<typeof UpdateCenterSchema>;
