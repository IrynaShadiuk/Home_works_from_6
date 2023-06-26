import React, { useState } from 'react';
import Header from '../Header/Header';
import TaskItem from '../TaskItem/TaskItem';

interface Task {
  id: number;
  task: string;
  done: boolean;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState<number | null>(null);
  
    const handleAddTask = () => {
      if (newTask.trim() !== '') {
        const newTaskObj: Task = {
          id: tasks.length + 1,
          task: newTask,
          done: false
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
      }
    };
  
    const handleCheck = (id: number) => {
      setTasks(prevTasks =>
        prevTasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              done: !task.done
            };
          }
          return task;
        })
      );
    };
  
    const handleEdit = (id: number) => {
      setEditTask(id);
    };
  
    const handleSaveEdit = (id: number) => {
      setTasks(prevTasks =>
        prevTasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              task: newTask
            };
          }
          return task;
        })
      );
      setEditTask(null);
    };
  
    const handleDelete = (id: number) => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
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
          <button onClick={handleAddTask}>Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Check</th>
              <th>DONE/PROGRESS</th>
              <th>Edit</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                editTask={editTask}
                newTask={newTask}
                handleCheck={handleCheck}
                handleEdit={handleEdit}
                handleSaveEdit={handleSaveEdit}
                handleDelete={handleDelete}
                setNewTask={setNewTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TaskList;
  