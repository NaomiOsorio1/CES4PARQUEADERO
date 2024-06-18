// src/components/ParkingEntry.js
import React, { useState, useContext } from 'react';
import { ParkingContext } from '../Context/ParkingContext';
import '../CSS/ParkingEntry.css'; // Asegúrate de tener este archivo CSS para estilos

const ParkingEntry = () => {
  const { vehicles, parkingCells, registerEntry, releaseCell } = useContext(ParkingContext);
  const [vehicleType, setVehicleType] = useState('carros');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [cellIndex, setCellIndex] = useState(null);

  const filteredVehicles = vehicles.filter(vehicle => vehicle.type === vehicleType);

  const handleEntry = () => {
    if (cellIndex !== null && selectedVehicle) {
      if (parkingCells[vehicleType][cellIndex] === null) {
        registerEntry(selectedVehicle, vehicleType, cellIndex);
        setSelectedVehicle('');
        setCellIndex(null);
      } else {
        alert('La celda seleccionada ya está ocupada.');
      }
    }
  };

  const handleReleaseCell = () => {
    if (cellIndex !== null && parkingCells[vehicleType][cellIndex] !== null) {
      releaseCell(vehicleType, cellIndex);
      setCellIndex(null);
    } else {
      alert('Seleccione una celda ocupada para liberar.');
    }
  };

  const availableCells = parkingCells[vehicleType].map((cell, index) => (
    <option key={index} value={index}>
      Celda {index + 1} - {cell ? `Ocupada por ${cell.plate}` : 'Disponible'}
    </option>
  ));

  return (
    <div className="parking-entry-container">
      <h2>Registrar Entrada</h2>

      {/* Formulario de entrada */}
      <div className="entry-form">
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="carros">Carros</option>
          <option value="motos">Motos</option>
        </select>
        <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
          <option value="">Seleccione un vehículo</option>
          {filteredVehicles.map((vehicle, index) => (
            <option key={index} value={vehicle.plate}>
              {vehicle.type === 'carros' ? 'Carro' : 'Moto'} - Placa: {vehicle.plate}
            </option>
          ))}
        </select>
        <select value={cellIndex} onChange={(e) => setCellIndex(Number(e.target.value))}>
          <option value={null}>Seleccione una celda</option>
          {availableCells}
        </select>
      </div>

      {/* Botones de acción */}
      <div className="button-container">
        <button onClick={handleEntry}>Registrar Entrada</button>
        <button onClick={handleReleaseCell}>Liberar Celda</button>
      </div>

      {/* Lista de vehículos registrados */}
      <h3>Vehículos Registrados</h3>
      <ul className="vehicle-list">
        {vehicles.map((vehicle, index) => (
          <li key={index}>
            {vehicle.type === 'carros' ? `Carro - Placa: ${vehicle.plate}, Modelo: ${vehicle.model}, Marca: ${vehicle.brand}` : `Moto - Placa: ${vehicle.plate}, Cilindraje: ${vehicle.cylinder}, Marca: ${vehicle.brand}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingEntry;
