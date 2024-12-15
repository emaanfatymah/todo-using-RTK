import React, { useState } from "react";
import { TodoData } from "../api";
import { useDispatch } from "react-redux";
import { addTask, deleteTasks } from "../store/slices/TaskSlice";
import DisplayTasks from "./DisplayTasks";
import '../styles/styles.scss'

const ViewTasks = () => {
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);

  const addnewtask = async () => {
    try {
      const newTask = await TodoData();
      if (newTask) {
        console.log(newTask);
        dispatch(addTask(newTask)); 
      }
    } catch (error) {
      console.error("Error adding new task:", error);
    }
  };

  const clearTasks = () => {
    dispatch(deleteTasks());
    setEditingTask(null); 
  }

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <button className="btn btn-success" onClick={addnewtask}>
        New Task
      </button>
      <ul>
        <DisplayTasks />
      </ul>
      <button className="btn btn-primary" onClick={()=> {clearTasks()}}> Clear All Tasks</button>
    </div>
  );
};

export default ViewTasks;
