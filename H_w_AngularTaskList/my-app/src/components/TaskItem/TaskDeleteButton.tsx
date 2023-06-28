import React from 'react';

interface TaskDeleteButtonProps {
  task: {
    id: number;
    task: string;
    done: boolean;
  };
  handleDelete: (id: number) => void;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ task, handleDelete }) => {
  return (
    <td>
      <button className='task-item-delete-button' onClick={() => handleDelete(task.id)}>
        DELETE
      </button>
    </td>
  );
};

export default TaskDeleteButton;