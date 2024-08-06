import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersTable from './components/UsersTable';
import UserDetail from './components/UserDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersTable />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
