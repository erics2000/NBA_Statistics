import React, { useState } from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';

export default function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false); // State for tracking login success

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // Simulating login success for any username/password
    if (username && password) {
      setLoginSuccess(true);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </form>
      {loginSuccess && (
        <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
          Login successful!
        </Typography>
      )}
    </Container>
  );
}
