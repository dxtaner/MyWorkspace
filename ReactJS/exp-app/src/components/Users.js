import React from 'react';
import User from './User';

const Users = ({ users, deleteUser }) => {
  return (
    <div className="card">
      <div className="card-body">
        {users.map(user => (
          <User key={user.id} user={user} deleteUser={deleteUser} />
        ))}
      </div>
    </div>
  );
};

export default Users;
