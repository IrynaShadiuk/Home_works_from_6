import React from 'react';

interface TaskEditButtonProps {
  editTask: number | null;
  task: {
    id: number;
    task: string;
    done: boolean;
  };
  newTask: string;
  handleSaveEdit: (id: number) => void;
  handleEdit: (id: number) => void;
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({
  editTask,
  task,
  newTask,
  handleSaveEdit,
  handleEdit
}) => {
  return (
    <td>
      {editTask === task.id ? (
        <button className='task-item-edit-button' onClick={() => handleSaveEdit(task.id)}>
          Save
        </button>
      ) : (
        <button className='task-item-edit-button' onClick={() => handleEdit(task.id)}>
          Edit
        </button>
      )}
    </td>
  );
};

export default TaskEditButton;