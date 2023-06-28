import React from 'react';

interface Task {
  id: number;
  task: string;
  done: boolean;
}

export const handleAddTask = (
  tasks: Task[],
  newTask: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  setNewTask: React.Dispatch<React.SetStateAction<string>>
) => {
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

export const handleCheck = (
  id: number,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
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

export const handleEdit = (
  id: number,
  setEditTask: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setEditTask(id);
};

export const handleSaveEdit = (
  id: number,
  newTask: string,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  setEditTask: React.Dispatch<React.SetStateAction<number | null>>
) => {
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

export const handleDelete = (
  id: number,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
};
