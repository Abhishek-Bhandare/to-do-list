import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, currentTask, updateTask, setCurrentTask }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask.text);
    } else {
      setTask('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    if (currentTask) {
      updateTask(currentTask.id, task);
    } else {
      addTask(task);
    }
    setTask('');
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
