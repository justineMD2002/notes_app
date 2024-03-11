import React, { cloneElement, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './CreateNote.css';

function CreateNote() {
  const [note, setNote] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('note', note);

      const response = await axios.post(
        'http://hyeumine.com/newnote.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      console.log('Note added successfully');
      setNote('');

      navigate('/displaynotes', { state: { userId: id } });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container">
      <h2 style={{textAlign: "center"}}>Create New Note</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Note:</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Note</button>
      </form>
    </div>
  );
}

export default CreateNote;
