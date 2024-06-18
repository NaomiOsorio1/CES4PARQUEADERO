import React, { useState, useContext } from 'react';
import { ParkingContext } from '../Context/ParkingContext';
import '../CSS/RegisterVehicle.css'; // Archivo CSS para estilos personalizados

const RegisterVehicle = () => {
  const { addVehicle } = useContext(ParkingContext);
  const [vehicleType, setVehicleType] = useState('carros'); // Usar 'carros' para alinearse con las claves en parkingCells
  const [plate, setPlate] = useState('');
  const [modelOrCylinder, setModelOrCylinder] = useState('');
  const [brand, setBrand] = useState('');

  const handleRegister = () => {
    if (plate && modelOrCylinder && brand) {
      addVehicle(vehicleType, {
        plate,
        model: vehicleType === 'carros' ? modelOrCylinder : undefined,
        cylinder: vehicleType === 'motos' ? modelOrCylinder : undefined,
        brand,
      });

      // Limpiar campos después de registrar
      setPlate('');
      setModelOrCylinder('');
      setBrand('');
    }
  };

  return (
    <div className="register-vehicle-container">
      <div className="register-vehicle-form">
        <h2>Registrar Vehículo</h2>
        <div className="form-group">
          <label>Tipo de Vehículo:</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="form-control"
          >
            <option value="carros">Carro</option>
            <option value="motos">Moto</option>
          </select>
        </div>
        <div className="form-group">
          <label>Placa o Cédula:</label>
          <input
            type="text"
            placeholder="Ingrese la placa o cedula"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>{vehicleType === 'carros' ? 'Modelo:' : 'Cilindraje:'}</label>
          <input
            type="text"
            placeholder={vehicleType === 'carros' ? 'Ingrese el modelo' : 'Ingrese el cilindraje'}
            value={modelOrCylinder}
            onChange={(e) => setModelOrCylinder(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Marca:</label>
          <input
            type="text"
            placeholder="Ingrese la marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={handleRegister} className="btn btn-primary">
          Registrar Vehículo
        </button>
      </div>
    </div>
  );
};

export default RegisterVehicle;
