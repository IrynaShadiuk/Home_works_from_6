import React from 'react';

interface HeaderProps {
  username: string;
  taskCount: number;
}

const Header: React.FC<HeaderProps> = ({ username, taskCount }) => {
  return (
    <div>
      <h1>Plan your day!</h1>
      <h2>User: {username}. Count of Task: {taskCount}</h2>
    </div>
  );
};

export default Header;