import React, { useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";

function Login() {

  return (
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
          <div className="login-box">
            <p className="login-text">Login to your Account</p>
            <TextField
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              variant="outlined"
            >
              Login
            </Button>
            <p>
              Don't have an Account ?{" "}
              <span
                className="hyper"
              >
                Sign Up
              </span>
            </p>
          </div>
          <div className="login-box">
            <p className="login-text">Create your Account</p>
            <TextField
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              label="Enter Email Address"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              variant="outlined"
            >
              Sign Up
            </Button>
            <p>
              Already have an Account ?
              <span
                className="hyper"
              >
                Log in
              </span>
            </p>
          </div>
      </div>
  );
}

export default Login;