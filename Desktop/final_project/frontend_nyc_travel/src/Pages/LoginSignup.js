import React from "react";

const LoginSignup = () => {
    return(
        <div className="loginsignup">
            <div className="signup">
                <h1>Sign up</h1>
                <div className="login-fields">
                    <input type='text' plaseholder='User Name'/>
                    <input type='text' placeholder="email@email"/>
                    <input type='text'placeholder="Password"/>
                </div>
                <button>Submit</button>
                <p>Login here</p>
            </div>
        </div>
    )
}

export default LoginSignup