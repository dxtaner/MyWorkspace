import React, { useState } from 'react';

const User = ({ user, deleteUser }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { id, name, email, username } = user;

  const handleDelete = () => {
    deleteUser(id);
  };

  const handleShow = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mb-4">
      <div>
        <div className="d-flex justify-content-between">
          <h4 className="d-inline" onClick={handleShow}>
            {name}
          </h4>
          <button
            className="btn btn-link"
            onClick={handleDelete}
            style={{ color: 'red', cursor: 'pointer' }}
          >
            Del
          </button>
        </div>

        {isVisible && (
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', marginTop: '10px', padding: '10px' }}>
            <div className="card-body">
              <p className="card-text">Username: {username}</p>
              <p className="card-text">Email: {email}</p>
              {/* <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">City: {user.address.city}</p> */}
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default User;
