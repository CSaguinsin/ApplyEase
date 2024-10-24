import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import ApplicationAdmin from './ApplicationAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} /> {/* Redirect to Login */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/applicationadmin' element={<ApplicationAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
