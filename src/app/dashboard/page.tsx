"use client";

import React, { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-display-2">Task Management</p>

        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            style={{ padding: "0.5rem", width: "60%", marginRight: "1rem" }}
          />
          <button onClick={handleAddTask} className="btn btn-dark">
            Add Task
          </button>
        </div>

        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          <ul style={{ textAlign: "left" }}>
            {tasks.map((task, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {task}{" "}
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={{ marginLeft: "1rem" }}
                  className="btn btn-light"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
