// src/components/ParkingOverview.js
import React, { useContext } from 'react';
import { ParkingContext } from '../Context/ParkingContext';
import '../CSS/ParkingOverView.css'; // Asegúrate de tener este archivo CSS para estilos

const ParkingOverview = () => {
  const { parkingCells } = useContext(ParkingContext);

  return (
    <div className="parking-overview-container">
      <h2>Vista General del Parqueadero</h2>

      {/* Sección de Carros */}
      <div className="vehicle-type-section">
        <h3 className="vehicle-type-title">Carros</h3>
        <div className="vehicle-cell-container">
          {parkingCells.carros.map((cell, index) => (
            <div key={index} className={`vehicle-cell ${cell ? 'occupied' : 'available'}`}>
              <div className="cell-index">Celda {index + 1}:</div>
              {cell ? (
                <div className="cell-details">
                  Ocupada por {cell.plate} <br />
                  Fecha de entrada: {cell.entryDate} <br />
                  Hora de entrada: {cell.entryTime}
                </div>
              ) : (
                <div className="cell-details">Disponible</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Motos */}
      <div className="vehicle-type-section">
        <h3 className="vehicle-type-title">Motos</h3>
        <div className="vehicle-cell-container">
          {parkingCells.motos.map((cell, index) => (
            <div key={index} className={`vehicle-cell ${cell ? 'occupied' : 'available'}`}>
              <div className="cell-index">Celda {index + 1}:</div>
              {cell ? (
                <div className="cell-details">
                  Ocupada por {cell.plate} <br />
                  Fecha de entrada: {cell.entryDate} <br />
                  Hora de entrada: {cell.entryTime}
                </div>
              ) : (
                <div className="cell-details">Disponible</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingOverview;
