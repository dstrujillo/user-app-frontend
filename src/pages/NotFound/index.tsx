// import React from "react";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Intente otra ruta</p>
      <Button onClick={handleRedirect}>Ir a home</Button>
    </div>
  );
};

export default NotFound;
