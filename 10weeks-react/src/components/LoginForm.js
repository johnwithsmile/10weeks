import React from "react";
import useForm from "./useForm";

const LoginForm = () => {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, such as sending the data to a server or validating credentials
    console.log("Username:", values.username);
    console.log("Password:", values.password);
    // Reset the form
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={values.username}
          onChange={handleChange}
          name="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          name="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
