// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@nextui-org/react'; 
import { AuthContext } from '../Context/AuthContext';
import '../CSS/NavBar.css'; // Importar el archivo CSS de estilos

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="navbar">
      <div className="navbar-content container mx-auto">
        {/* Logo */}
        <RouterLink to="/" className="logo">
          Mi Parqueadero
        </RouterLink>

        {/* Navigation Links */}
        <nav className="nav-links">
          {user ? (
            <>
              <RouterLink to="/register" className="nav-link">
                Registrar Vehículo
              </RouterLink>
              <RouterLink to="/parking" className="nav-link">
                Gestión de Parqueadero
              </RouterLink>
              <RouterLink to="/overview" className="nav-link">
                Visión General
              </RouterLink>
              <Button onClick={logout} variant="outlined" className="logout-button">
                Logout
              </Button>
            </>
          ) : (
            <RouterLink to="/login" className="nav-link">
              Login
            </RouterLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
