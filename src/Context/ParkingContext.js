// src/context/ParkingContext.js
import React, { createContext, useState } from 'react';

export const ParkingContext = createContext();

const ParkingProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [parkingCells, setParkingCells] = useState({
    carros: Array(5).fill(null), // 5 celdas para carros
    motos: Array(5).fill(null),  // 5 celdas para motos
  });

  const addVehicle = (type, vehicle) => {
    // Verificar si ya existe un vehículo con la misma placa
    const exists = vehicles.some(v => v.plate === vehicle.plate);
    if (exists) {
      alert(`El vehículo con placa ${vehicle.plate} ya está registrado.`);
      return;
    }
    setVehicles([...vehicles, { ...vehicle, type }]);
  };

  const registerEntry = (plate, type, cellIndex) => {
    const vehicle = vehicles.find((v) => v.plate === plate);
    if (vehicle) {
      const now = new Date();
      const entryDate = now.toLocaleDateString(); // Fecha de ingreso
      const entryTime = now.toLocaleTimeString(); // Hora de ingreso
      const updatedCells = [...parkingCells[type]];
      updatedCells[cellIndex] = { plate: vehicle.plate, entryDate, entryTime }; // Guardamos la placa, la fecha y la hora de ingreso
      setParkingCells((prev) => ({ ...prev, [type]: updatedCells }));
    }
  };

  const releaseCell = (type, cellIndex) => {
    const updatedCells = [...parkingCells[type]];
    updatedCells[cellIndex] = null;
    setParkingCells((prev) => ({ ...prev, [type]: updatedCells }));
  };

  return (
    <ParkingContext.Provider value={{ vehicles, parkingCells, setParkingCells, addVehicle, registerEntry, releaseCell }}>
      {children}
    </ParkingContext.Provider>
  );
};

export default ParkingProvider;
