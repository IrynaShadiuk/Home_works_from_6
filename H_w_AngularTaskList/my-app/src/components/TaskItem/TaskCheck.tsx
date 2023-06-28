import React from 'react';

interface TaskCheckProps {
  task: {
    id: number;
    task: string;
    done: boolean;
  };
  handleCheck: (id: number) => void;
}

const TaskCheck: React.FC<TaskCheckProps> = ({ task, handleCheck }) => {
  return (
    <td>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => handleCheck(task.id)}
      />
    </td>
  );
};

export default TaskCheck;