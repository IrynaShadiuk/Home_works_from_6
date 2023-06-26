import React from 'react';

interface TaskItemProps {
  task: {
    id: number;
    task: string;
    done: boolean;
  };
  editTask: number | null;
  newTask: string;
  handleCheck: (id: number) => void;
  handleEdit: (id: number) => void;
  handleSaveEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  editTask,
  newTask,
  handleCheck,
  handleEdit,
  handleSaveEdit,
  handleDelete,
  setNewTask
}) => {
  return (
    <tr key={task.id}>
      <td>{task.id}</td>
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
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => handleCheck(task.id)}
        />
      </td>
      <td>{task.done ? 'DONE' : 'PROGRESS'}</td>
      <td>
        {editTask === task.id ? (
          <button onClick={() => handleSaveEdit(task.id)} style={{ color: 'yellow' }}>
            Save
          </button>
        ) : (
          <button onClick={() => handleEdit(task.id)} style={{ color: 'yellow' }}>
            Edit
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleDelete(task.id)} style={{ color: 'red' }}>
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;