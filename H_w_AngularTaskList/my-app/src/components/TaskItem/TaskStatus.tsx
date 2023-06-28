import React from 'react';

interface TaskStatusProps {
  task: {
    id: number;
    task: string;
    done: boolean;
  };
  getTaskStatusColor: () => string;
}

const TaskStatus: React.FC<TaskStatusProps> = ({ task, getTaskStatusColor }) => {
  return <td className={getTaskStatusColor()}>{task.done ? 'DONE' : 'PROGRESS'}</td>;
};

export default TaskStatus;