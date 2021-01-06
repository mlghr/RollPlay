import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const DB_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Login = () =>
{
  const initialState = {
    username: "",
    password: "",
  }
  const [ formData, setFormData ] = useState( initialState );

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
    const { username, password } = formData;
    let res = await axios.post
      ( `${ DB_URL }/auth/login`,
        {
          username: username,
          password: password
        } )
          .then(json => {
          console.log(json)
        })
    console.log( res );
    setFormData( initialState )
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-heading">Log In</h1>

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

        <button className="LoginBtn" type="submit">Log in</button>
        <small className="no-account-tag">No account yet?</small>
      </form>
    </div>
  )
}

export default Login;