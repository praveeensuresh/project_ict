import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css"; // You'll need to create this CSS file

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const adminCredentials = {
    email: "admin@example.com",
    password: "admin123",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (!formData.name || !formData.email || !formData.phone || !formData.password) {
        setError("Please fill in all fields.");
        return;
      }
      console.log("User registered successfully:", formData);
      alert("Registration successful! Please log in.");
      setIsSignUp(false);
      return;
    } else {
      if (!formData.email || !formData.password) {
        setError("Please fill in all fields.");
        return;
      }
      if (
        formData.email === adminCredentials.email &&
        formData.password === adminCredentials.password
      ) {
        console.log("Admin logged in successfully");
        alert("Welcome Admin!");
        navigate("/admin-dashboard");
        return;
      }
      console.log("User logged in successfully:", formData);
      alert("Login successful!");
      navigate("/home");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
          <p>{isSignUp ? "Sign up to get started" : "Sign in to continue"}</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          {isSignUp && (
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <button type="submit" className="auth-button">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
              className="toggle-link"
            >
              {isSignUp ? " Login" : " Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
