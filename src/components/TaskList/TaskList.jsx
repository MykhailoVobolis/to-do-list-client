import Task from "../Task/Task.jsx";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/tasks/selectors.js";

import css from "./TaskList.module.css";

export default function TaskList() {
  const tasks = useSelector(selectTasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task._id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
