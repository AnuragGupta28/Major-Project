import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("/api/auth/login", credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Invalid credentials!");
      });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 4, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        name="email"
        type="email"
        value={credentials.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Login
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don't have an account? <a href="/signup">Sign Up</a>
      </Typography>
    </Box>
  );
};

export default Login;
