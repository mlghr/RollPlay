import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const DB_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Register = () =>
{
  const initialState = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    age: 0,
    game_interests: ""
  }
  const [ formData, setFormData ] = useState( initialState )
  const handleChange = e =>
  {
    const { name, value } = e.target;
    setFormData( data => ( {
      ...data,
      [ name ]: value
    } ) )
  };

  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    const { username, password, first_name, last_name, email, age, game_interests } = formData;
    let res = await axios.post
      ( `${ DB_URL }/auth/register`,
        {
          username: username,
          password: password,
          first_name: first_name,
          last_name: last_name,
          email: email,
          age: age,
          game_interests: game_interests
        } )
          .then(json => {
          console.log(json)
        })
    setFormData( initialState )
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-heading">Create an account</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="first_name"></label>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          id="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <label htmlFor="last_name"></label>
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          id="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <label htmlFor="age"></label>
        <input
          type="number"
          placeholder="Age"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="game_interests"></label>
        <input
          type="text"
          placeholder="Game Interests"
          name="game_interests"
          id="game_interests"
          value={formData.game_interests}
          onChange={handleChange}
        />

        <button className="SignUpBtn" type="submit">Sign up</button>
        <small className="has-account-tag">Already have an account?</small>
      </form>
    </div>
  )
}

export default Register;