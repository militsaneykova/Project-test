import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useRef, useState, useContext } from "react";
//import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
export default LoginSignup;

function LoginSignup({ setMember }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:4000/api/members', {
        email,
        password,
      });
      
      console.log(res.data);
      setMember(res.data);
    
    } catch (error) {
      
    }
    
    console.log("Logged In");
  };

//////////Chalmata///////////////////////
//     try {
//           const res = await axios.get('http://localhost:4000/api/members', {
//             email,
//             password,
//           });
//     console.log(res?.data);

//     if (res.data?.member?._id) {
//       localStorage.setItem("member", JSON.stringify(res.data?.member));
//       setMember(res.data?.member);

//       // taking the user id from the response and redirecting them to the profile page
//       // window.location.href = `/profile/${response.data.user._id}`;
//       navigate("/memberPage");
//     } else {
//       console.error("Failed to login");
//       alert("Incorrect Email or Password.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };








  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
}
