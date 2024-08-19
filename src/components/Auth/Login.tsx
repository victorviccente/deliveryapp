import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Adicione a lógica de login aqui
    console.log('Login:', email, password);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} p={4} boxShadow={3} borderRadius={2} bgcolor="#fff">
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Entrar
        </Typography>
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
          onClick={handleLogin}
          sx={{ mt: 2, bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}
        >
          Login
        </Button>
        <Typography align="center" sx={{ mt: 2 }}>
          Não tem uma conta? <a href="/signup" style={{ color: 'red' }}>Cadastre-se</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
