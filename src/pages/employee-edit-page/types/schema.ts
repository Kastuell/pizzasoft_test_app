import { z } from "zod";

const birthdayRegex = new RegExp(/^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/);
const phoneRegex = new RegExp(/^[+][7]\s[(]\d{3}[)]\s\d{3}-\d{4}$/);

export const formDataSchema = z.object({
  name: z.string().min(3, {
    message: "Минимум 3 символа!",
  }),
  isArchive: z.boolean(),
  role: z.any(),
  phone: z.string().regex(phoneRegex, "Неверный формат номера!"),
  birthday: z.string().regex(birthdayRegex, "Невереный формат даты!"),
});

export type FormData = z.infer<typeof formDataSchema>;
