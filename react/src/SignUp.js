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
    phone: "",
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

  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    const { username, password, first_name, last_name, phone } = formData;
    let res = await axios.post
      ( `${ API_URL }/auth/register`,
        {
          username: { username },
          password: { password },
          first_name: { first_name },
          last_name: { last_name },
          phone: { phone }
        } )
    alert( `Created user, ${ username } with first name ${ first_name } & password ${ password } ` );
    console.log( res );
    setFormData( initialState )
  }

  return (
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
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        id="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <button className="genBtn">Sign up</button>
    </form>
  )
}

export default SignUp;