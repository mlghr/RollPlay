import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

const SignUp = () =>
{
  const initialState = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
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
    const { username, password, first_name, last_name } = formData;
    let res = await axios.post
      ( `${ API_URL }/auth/register`,
        {
          username: { username },
          password: { password },
          first_name: { first_name },
          last_name: { last_name }
        } )
    alert( `Created user, ${ username } with first name ${ first_name } & password ${ password } ` );
    console.log( res );
    setFormData( initialState )
  }

  return (
    <div className="form-wrapper">
      <h1 className="heading">Create Account</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="first_name">First</label>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          id="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <label htmlFor="last_name">Last</label>
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          id="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <button className="genBtn" type="submit">Sign up</button>
        <small>Already have an account?</small>
      </form>
    </div>
  )
}

export default SignUp;