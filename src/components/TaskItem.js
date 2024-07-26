import React from 'react';

const TaskItem = ({ task, deleteTask, toggleComplete, setCurrentTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)}>
        {task.text}
      </span>
      <button onClick={() => setCurrentTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
