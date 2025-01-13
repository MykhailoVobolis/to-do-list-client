import * as Yup from "yup";

export const validationSchema = Yup.object({
  description: Yup.string().required("Task text is required"),
});
