import { useEffect } from "react";
import Layout from "../Layout/Layout.jsx";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import Loader from "../Loader/Loader.jsx";
import { fetchTasks } from "../../redux/tasks/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading, selectTasks } from "../../redux/tasks/selectors.js";
import Error from "../Error/Error.jsx";
import TextFilter from "../TextFilter/TextFilter.jsx";
import { selectTextFilter } from "../../redux/filters/selectors.js";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filterText = useSelector(selectTextFilter);
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks(filterText));
  }, [filterText]);

  return (
    <Layout>
      <h1>To Do List</h1>
      <TaskForm />
      {tasks.length > 0 && <TextFilter />}
      {loading && <Loader />}
      {error && <Error>Sorry, an error occurred! Try reloading this page!</Error>}
      {tasks.length > 0 && <TaskList />}
    </Layout>
  );
}
