import React from 'react';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li>
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <button className="boton" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;
