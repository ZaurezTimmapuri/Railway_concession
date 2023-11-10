import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // After handling the submission, you can navigate to the dashboard page
    // using the <Link> component.
  };

  return (
    <div className="sign-up-form">
       <img src="./dmce-logo.png" />
      <h2>Sign Up </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className={`password-toggle ${showPassword ? 'show' : ''}`}
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <Link to="/Dashboard"> {/* Use the Link component to navigate to the dashboard page */}
          <button type="submit">Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default Signup;

