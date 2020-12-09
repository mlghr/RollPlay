import React from "react";
import "./SignUp.css";

function SignUp(){

    function handleChange(){
        const history = useHistory();
        const [activeView, setActiveView] = useState("login");
        const [loginInfo, setLoginInfo] = useState({
          username: "",
          password: "",
          first_name: "",
          last_name: "",
          email: "",
          errors: []
  });
    }

    function handleSubmit(e){
        e.preventDefault();

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
    
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                value={formData.email}
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
    
            <button>Add me to list!</button>
        </form>
    )
}

export default SignUp;