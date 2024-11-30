import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', password: '' };

    // Username validation (simple email format check)
    if (!username) {
      newErrors.username = 'Username is required.';
      valid = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(username)) {
      newErrors.username = 'Enter a valid email address.';
      valid = false;
    }

    // Password validation (check if password is provided and at least 6 characters long)
    if (!password) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid. Logging in:', { username, password });
      // Proceed with login logic here, e.g., API call
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Enter your email"
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
