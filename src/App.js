
import { AppBar, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import Login from './components/Login';
import RegisterForm from './components/Register';
import Dashboard from './components/dashboard/dashboard';
import Grid from '@mui/material/Grid';
function App() {
  const [flag, setFlag] = useState(false);
  return (
    <React.Fragment>

      <Container>
        <Routes>

          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/dashboard" element={<><AppBar ><Toolbar>Company Mark</Toolbar></AppBar><Dashboard /></>} />
          <Route path="/" element={<Login />} />
        </Routes>


      </Container>
    </React.Fragment>
  );
}

export default App;
