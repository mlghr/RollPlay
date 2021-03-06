import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Alert from "../shared/Alert";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    about: "",
    picture: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "SignupForm",
      "signup=", typeof signup,
      "formData=", formData,
      "formErrors=", formErrors,
  );

  // For uploading a file. Need to implement useRef to have this function properly.
  // function handleFileChange(evt) {
  //   const {value} = evt.target;
  //   fileInput.current.value = value;
  //   console.debug(fileInput);
  // }

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /match.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      console.log('sign up success')
      history.push('/match')
    } else {
      setFormErrors(result.errors);
    }
  }
  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }


  return (
      <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Sign Up</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      autoComplete="new-password"
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>First name</label>
                  <input
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                      name="age"
                      className="form-control"
                      value={formData.age}
                      onChange={handleChange}
                      autoComplete="age"
                  />
                </div>
                <div className="form-group">
                  <label>About</label>
                  <textarea
                      type="text"
                      name="about"
                      rows="3"
                      className="form-control"
                      value={formData.about}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Picture <i>(URL Text)</i> </label>
                  <input 
                    type="text"
                    name="picture"
                    className="form-control"
                    value={formData.picture}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                  />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupForm;