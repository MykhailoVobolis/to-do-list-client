import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

import css from "./TaskForm.module.css";

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {};

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field className={css.field} name="text" placeholder="Enter task text..." />
        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
}
