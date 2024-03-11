import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUserComponent.css';

function CreateUserComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('firstname', firstName);
      formData.append('lastname', lastName);

      const response = await axios.post(
        'http://hyeumine.com/newuser.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      console.log('User created successfully:', response.data);
      setFirstName('');
      setLastName('');

      navigate('/newnote', { state: { id: response.data.id } });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container">
      <h2  style={{textAlign: "center"}}>Create New User</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
    </div>
  );
}

export default CreateUserComponent;
