import React from 'react';
import './taskItem.scss';
import TaskCheck from './TaskCheck';
import TaskDeleteButton from './TaskDeleteButton';
import TaskEditButton from './TaskEditButton';
import TaskName from './TaskName';
import TaskStatus from './TaskStatus';
import TaskId from './TaskId';


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
  const getTaskStatusColor = () => {
    return task.done ? 'done-task' : 'progress-task';
  };

  return (
    <tr key={task.id} className="table-row">
      <TaskId id={task.id} />
      <TaskName
        editTask={editTask}
        newTask={newTask}
        task={task}
        setNewTask={setNewTask}
      />
      <TaskCheck
        task={task}
        handleCheck={handleCheck}
      />
      <TaskStatus
        task={task}
        getTaskStatusColor={getTaskStatusColor}
      />
      <TaskEditButton
        editTask={editTask}
        task={task}
        newTask={newTask}
        handleSaveEdit={handleSaveEdit}
        handleEdit={handleEdit}
      />
      <TaskDeleteButton
        task={task}
        handleDelete={handleDelete}
      />
    </tr>
  );
};

export default TaskItem;