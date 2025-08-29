import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "الايميل غير صحيح" }),
  password: z
    .string()
    .min(6, { message: "يجب أن تكون كلمة المرور أكثر من 6 حروف" })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/, {
      message: "يجب أن تحتوي كلمة المرور على أحرف وأرقام",
    }),
});
