import { useEffect } from "react";
import Layout from "../Layout/Layout.jsx";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import { fetchTasks } from "../../redux/tasks/operations.js";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <h1>To Do List</h1>
      <TaskForm />
      <TaskList />
    </Layout>
  );
}
