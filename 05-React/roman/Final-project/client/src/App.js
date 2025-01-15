import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GuitarProvider } from './context/GuitarContext';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import GuitarList from './components/GuitarList';
import GuitarDetails from './components/GuitarDetails';
import AddEditGuitar from './components/AddEditGuitar';

const App = () => {
  return (
    <AuthProvider>
      <GuitarProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/guitars" element={<GuitarList />} />
            <Route path="/guitars/:id" element={<GuitarDetails />} />
            <Route path="/add-edit-guitar" element={<AddEditGuitar />} />
          </Routes>
        </Router>
      </GuitarProvider>
    </AuthProvider>
  );
};

export default App;
