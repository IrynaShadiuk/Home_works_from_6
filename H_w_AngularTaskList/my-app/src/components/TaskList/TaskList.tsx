import React, { useState } from 'react';
import Header from '../Header/Header';
import TaskItem from '../TaskItem/TaskItem';
import { handleAddTask, handleCheck, handleDelete, handleEdit, handleSaveEdit } from './taskHandlers';
import './taskList.scss'

interface Task {
  id: number;
  task: string;
  done: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState<number | null>(null);

  const handleAddTaskClick = () => {
    handleAddTask(tasks, newTask, setTasks, setNewTask);
  };

  const handleCheckTask = (id: number) => {
    handleCheck(id, tasks, setTasks);
  };

  const handleEditTask = (id: number) => {
    handleEdit(id, setEditTask);
  };

  const handleSaveEditTask = (id: number) => {
    handleSaveEdit(id, newTask, tasks, setTasks, setEditTask);
  };

  const handleDeleteTask = (id: number) => {
    handleDelete(id, tasks, setTasks);
  };

  return (
    <div>
      <header>
        <Header username="John" taskCount={tasks.length} />
      </header>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={handleAddTaskClick}>Add</button>
      </div>
      <table className="task-list">
        <thead>
          <tr>
            <th>#</th>
            <th className="table-header">Task</th>
            <th className="table-header">Check</th>
            <th className="table-header">DONE/PROGRESS</th>
            <th className="table-header">Edit</th>
            <th className="table-header">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              editTask={editTask}
              newTask={newTask}
              handleCheck={handleCheckTask}
              handleEdit={handleEditTask}
              handleSaveEdit={handleSaveEditTask}
              handleDelete={handleDeleteTask}
              setNewTask={setNewTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
