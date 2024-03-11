import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NotesList.css';
import { useLocation } from 'react-router-dom';

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { userId } = location.state;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'http://hyeumine.com/mynotes.php',
          {
            params: {
              id: userId
            }
          }
        );
        setNotes(response.data.notes);
        console.log('Response from API:', response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [userId]);

  return (
    <div className="notes-container">
      <h2>My Notes</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="notes-list">
          {notes.map((note, index) => (
            <li key={index} className="note-item">
              <div>Name: {note[0]}</div>
              <div>Date and Time: {note[1]}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesList;
