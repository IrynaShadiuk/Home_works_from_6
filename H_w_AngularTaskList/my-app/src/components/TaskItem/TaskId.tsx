import React from 'react';

interface TaskIdProps {
  id: number;
}

const TaskId: React.FC<TaskIdProps> = ({ id }) => {
  return <td>{id}</td>;
};

export default TaskId;