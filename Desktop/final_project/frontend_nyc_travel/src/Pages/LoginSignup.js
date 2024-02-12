import React from "react";

import { useRef, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
export default MainPage;


function MainPage() {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    //useNavigate is used to navigate btween diff pages in react router
    const history = useNavigate();
    async function submit(e){
        e.preventDefault();
    }
    try{
         
           axios.post('http://localhost:4000/', {
                email, password
        })
        .then(res =>{
            if (res.data='exist'){
                //history redirect us to home page
                history('/userpage ', {state:{id:email}})
            }
            else if (res.data='not exist'){
                    // alert('User have not sign up')
                    
            }
        })
        .catch(e=>{
            // alert('wrong details')
            console.log(e)
        })
    }
        
    catch(e){
            console.log(e)
    }

    return(
        <div>
    <h1>Login</h1>
    <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <input type="submit" onClick={submit}/>

    </form>
    <br/>
    <>OR</>
    <br/>
    <Link to='/signup'>Sign up page </Link>




</div>
    )
    }
    //   const userCtx = useContext(UserContext);
//   const { setUser } = userCtx;

//   const emailInputRef = useRef(null);
//   const passwordInputRef = useRef(null);

//   const [showSignUp, setShowSignUp] = useState(false);

//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     if (emailInputRef.current.value === "") {
//       emailInputRef.current.focus();
//       return;
//     }
//     if (passwordInputRef.current.value === "") {
//       passwordInputRef.current.focus();
//       return;
//     }

//     // make a POST request to the backend
//     const res = await axios.post("http://localhost:4000/api/members/login", { 
//       email: emailInputRef.current.value,
//       password: passwordInputRef.current.value,
//     });

//     console.log(res.data);
//     setUser(res.data);
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     if (emailInputRef.current.value === "") {
//       emailInputRef.current.focus();
//       return;
//     }
//     if (passwordInputRef.current.value === "") {
//       passwordInputRef.current.focus();
//       return;
//     }

//     // make a POST request to the backend
//     const res = await axios.post("http://localhost:4000/api/members/", {
//       email: emailInputRef.current.value,
//       password: passwordInputRef.current.value,
//     });

//     console.log(res.data);
//     setUser(res.data);
//   };

//   return (
//     <main>
//       <h1>Main Page</h1>

//       {showSignUp ? (
//         <div>
//           <form
//             onSubmit={handleSignIn}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               padding: "10px",
//             }}
//           >
//             <h3>Sign In</h3>
//             <label htmlFor="email">Email</label>
//             <input
//               ref={emailInputRef}
//               name="email"
//               id="email"
//               type="text"
//               placeholder="Email or phone"
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               ref={passwordInputRef}
//               name="password"
//               id="password"
//               type="text"
//             />
//             <button type="submit">Sign In</button>
//           </form>
//           <span>
//             Don't have an account?{" "}
//             <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
//           </span>
//         </div>
//       ) : (
//         <div>
//           <form
//             onSubmit={handleSignUp}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               padding: "10px",
//             }}
//           >
//             <h3>Sign Up</h3>
//             <label htmlFor="email">Email</label>
//             <input
//               ref={emailInputRef}
//               name="email"
//               id="email"
//               type="text"
//               placeholder="Email or phone"
//             />
//             <label htmlFor="password">Password</label>
//             <input
//               ref={passwordInputRef}
//               name="password"
//               id="password"
//               type="text"
//             />
//             <button type="submit">Sign Up</button>
//           </form>
//           <span>
//             Already have an account?{" "}
//             <button onClick={() => setShowSignUp(!showSignUp)}>Sign In</button>
//           </span>
//         </div>
//       )}
//     </main>
//   );
// }



// const LoginSignup = () => {
//     return(
//         <div className="loginsignup">
//             <div className="signup">
//                 <h1>Sign up</h1>
//                 <div className="login-fields">
//                     <input type='text' plaseholder='User Name'/>
//                     <input type='text' placeholder="email@email"/>
//                     <input type='text'placeholder="Password"/>
//                 </div>
//                 <button>Submit</button>
//                 <p>Login here</p>
//             </div>
//         </div>
//     )
// }