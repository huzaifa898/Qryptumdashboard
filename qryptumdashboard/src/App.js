import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { FileUpload } from './components/fileupload';
import  {Metadata}    from './components/Metadata';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/metadata" element={<Metadata />} />
      </Routes>
    </Router>
  );
}

export default App;