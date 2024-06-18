// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import RegisterVehicle from './Components/RegisterVehicle';
import ParkingEntry from './Components/ParkingEntry';
import ParkingOverview from './Components/ParkingOverView';
import AuthProvider from './Context/AuthContext';
import ParkingProvider from './Context/ParkingContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ParkingProvider>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterVehicle />} />
            <Route path="/parking" element={<ParkingEntry />} />
            <Route path="/overview" element={<ParkingOverview />} />
            <Route path="/" element={<ParkingOverview />} />
          </Routes>
        </ParkingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
