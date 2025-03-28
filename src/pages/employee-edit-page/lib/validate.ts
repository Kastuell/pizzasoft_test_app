import { formDataSchema } from "../types/schema";

export const validate = (formData: any) => {
  const res = formDataSchema.safeParse(formData);
  if (res.success) {
    return undefined;
  }
  return res.error.format();
};
