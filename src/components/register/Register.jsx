import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.css"

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        console.log("handle Register is working right")
        // Simulate authentication
        // if (username === 'admin' && password === 'password') {
        //     localStorage.setItem('isAuthenticated', 'true');
        //     navigate('/');
        // } else {
        //     alert('Invalid username or password');
        // }
    };

    return (
        <div className="register-page">
            <h2>Register</h2>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="userType">Register As:</label>
                <select
                    id="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="faculty">faculty</option> 
                    <option value="alumni">alumni</option>

                </select>
            </div>
            <button onClick={handleRegister}>Register</button>
            <p className='exitingUser'>Existing user? 
           <Link to={"/login"}>
                    <span className='clickhere'> click here to login </span>
           </Link>
             </p>


        </div>
    );
};

export default Register;


