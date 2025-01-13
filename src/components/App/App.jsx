import { useEffect } from "react";
import Layout from "../Layout/Layout.jsx";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import Loader from "../Loader/Loader.jsx";
import { fetchTasks } from "../../redux/tasks/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/tasks/selectors.js";
import Error from "../Error/Error.jsx";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <h1>To Do List</h1>
      <TaskForm />
      {loading && <Loader />}
      {error && <Error>Sorry, an error occurred! Try reloading this page!</Error>}
      <TaskList />
    </Layout>
  );
}
