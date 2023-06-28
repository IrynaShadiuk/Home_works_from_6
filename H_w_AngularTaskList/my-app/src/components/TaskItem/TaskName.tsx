import React from 'react';

interface TaskNameProps {
  editTask: number | null;
  newTask: string;
  task: {
    id: number;
    task: string;
    done: boolean;
  };
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
}

const TaskName: React.FC<TaskNameProps> = ({
  editTask,
  newTask,
  task,
  setNewTask
}) => {
  return (
    <td>
      {editTask === task.id ? (
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
      ) : (
        task.task
      )}
    </td>
  );
};

export default TaskName;