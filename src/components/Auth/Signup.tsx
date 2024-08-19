import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const Signup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = () => {
    // Adicione a lógica de cadastro aqui
    console.log('Signup:', name, email, password);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} p={4} boxShadow={3} borderRadius={2} bgcolor="#fff">
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Cadastre-se
        </Typography>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSignup}
          sx={{ mt: 2, bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}
        >
          Cadastre-se
        </Button>
        <Typography align="center" sx={{ mt: 2 }}>
          Já tem uma conta? <a href="/login" style={{ color: 'red' }}>Login</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
