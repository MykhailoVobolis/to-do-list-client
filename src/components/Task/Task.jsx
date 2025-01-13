import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations.js";

import css from "./Task.module.css";

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{task.description}</p>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
