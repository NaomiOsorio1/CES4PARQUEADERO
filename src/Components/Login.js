import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Button, Input, Spacer } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css'; // Importar estilos CSS

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función de login del contexto y maneja la redirección
    if (login(username, password)) {
      navigate('/'); // Redirige a la página principal si el login es exitoso
    } else {
      alert('Login fallido'); // Muestra un mensaje si el login falla
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario</label>
          <Input
            id="username"
            type="text"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <Input
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Spacer y={2} />
          <Button type="submit" fullWidth>
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
