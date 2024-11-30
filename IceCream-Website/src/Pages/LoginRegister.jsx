import React, { useState } from "react";

const LoginRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("You have successfully registered");
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    alert("You are successfully logged in");
    setData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="login-register">
      <h1 className="story-heading">Login/Register</h1>
      <div className="login-container">
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={submitForm}>
            <label>Email:</label>
            <br />
            <input
              type="email"
              className="login-input"
              name="email"
              value={data.email}
              onChange={formChange}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              className="login-input"
              name="password"
              value={data.password}
              onChange={formChange}
            />
            <br />
            <input
              type="submit"
              value="Login"
              className="login-input login-button"
            />
          </form>
        </div>
        <div className="register">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <br />
            <input
              type="text"
              className="login-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              type="email"
              className="login-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <label>Phone number:</label>
            <br />
            <input
              type="tel"
              className="login-input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              className="login-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              className="login-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <input
              type="submit"
              value="Register"
              className="login-input login-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
