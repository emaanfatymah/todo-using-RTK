import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, updateTask } from "../store/slices/TaskSlice";

function DisplayTasks() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tasks);

  const [editingTask, setEditingTask] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const deleteTask = (id) => {
    dispatch(removeTask(id));
  };

  const startEditing = (id, task) => {
    setEditingTask(id);
    setUpdatedText(task);
  };

  const saveUpdatedTask = (id) => {
    dispatch(updateTask({ id, updatedTask: updatedText }));
    setEditingTask(null);
  };

  return (
    <>
      {data.map((task, id) => (
        <li key={id}>
          {editingTask === id ? (
            <>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => saveUpdatedTask(id)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setEditingTask(null)}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {task}
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => startEditing(id, task)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteTask(id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </>
  );
}

export default DisplayTasks;
