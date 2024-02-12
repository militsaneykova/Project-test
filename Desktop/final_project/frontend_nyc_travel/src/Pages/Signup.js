import React from "react";

import { useRef, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
export default MainPage;


function MainPage() {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const history = useNavigate();

    async function submit(e){
        e.preventDefault();
    }
    try{
         
         axios.post('http://localhost:4000/signup', {
                            email, password
        })
        .then(res =>{
            if (res.data='exist'){
                // alert('User alread exist') 
                //history redirect us to home page
                //history('/Userpage', {state:{id:email}})
            }
            else if (res.data='not exist'){
                 history('/', {state:{id:email}})
                
            }
    })
    .catch(e=>{
        alert('wrong details')
        console.log(e)
    })

    }
        
    catch(e){
            console.log(e)
    }

    return(
        <div>
    <h1>Sign up</h1>
    <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <input type="submit" onClick={submit}/>

    </form>
    <br/>
    <>OR</>
    <Link to='/'>Login page </Link>




</div>
    )
    }