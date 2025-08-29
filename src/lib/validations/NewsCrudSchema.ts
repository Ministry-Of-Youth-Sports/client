import * as z from "zod";

export const CreateNewsSchema = z.object({
  image: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "الرجاء اختيار صورة",
    })
    .refine(
      (files) => {
        const file = (files as FileList)[0];
        return (
          file &&
          ["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(
            file.type
          )
        );
      },
      { message: "الصورة يجب أن تكون jpg أو png أو webp" }
    ),
  title: z.string().min(1, { message: "الرجاء كتابة عنوان الخبر" }),
  content: z.string().min(1, { message: "الرجاء كتابة محتوى الخبر" }),
  socialLink: z
    .string()
    .min(1, { message: "الرجاء كتابة رابط الخبر" })
    .url({ message: "الرجاء كتابة رابط صحيح" }),
});

export const UpdateNewsSchema = z.object({
  image: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || (files instanceof FileList && files.length === 0)) {
          return true;
        }
        return files instanceof FileList && files.length > 0;
      },
      { message: "إذا تم اختيار صورة، يجب أن تكون صالحة" }
    )
    .refine(
      (files) => {
        if (!files || (files instanceof FileList && files.length === 0)) {
          return true;
        }
        const file = (files as FileList)[0];
        return (
          file &&
          ["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(
            file.type
          )
        );
      },
      { message: "الصورة يجب أن تكون jpg أو png أو webp" }
    ),
  title: z.string().min(1, { message: "الرجاء كتابة عنوان الخبر" }),
  content: z.string().min(1, { message: "الرجاء كتابة محتوى الخبر" }),
  socialLink: z
    .string()
    .min(1, { message: "الرجاء كتابة رابط الخبر" })
    .url({ message: "الرجاء كتابة رابط صحيح" }),
});

export type CreateNewsForm = z.infer<typeof CreateNewsSchema>;
export type UpdateNewsForm = z.infer<typeof UpdateNewsSchema>;
