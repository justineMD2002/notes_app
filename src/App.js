import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';
import CreateNote from './components/CreateNote'; 
import DisplayNote from './components/DisplayNote'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUserComponent />} />
        <Route path="/newnote" element={<CreateNote />} /> 
        <Route path="/displaynotes" element={<DisplayNote />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
