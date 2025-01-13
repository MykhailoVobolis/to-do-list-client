import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/operations.js";
import { validationSchema } from "../../utils/validationSchemas.js";

import css from "./TaskForm.module.css";

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addTask(values.description));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className={css.form}>
          <Field className={css.field} name="description" placeholder="Enter task text..." />
          {errors.description && touched.description && <p className={css.error}>{errors.description}</p>}
          <button type="submit">Add task</button>
        </Form>
      )}
    </Formik>
  );
}
