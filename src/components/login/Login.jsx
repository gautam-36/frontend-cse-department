import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("handle login is working right")
        // Simulate authentication
        // if (username === 'admin' && password === 'password') {
        //     localStorage.setItem('isAuthenticated', 'true');
        //     navigate('/');
        // } else {
        //     alert('Invalid username or password');
        // }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Email:</label>
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
                <label htmlFor="userType">Login As:</label>
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
            <button onClick={handleLogin}>Login</button>
            <p className='newUser'>New User?
                <Link to={"/register"}>
                    <span className='clickhere'> click here to Register </span>
                </Link>
            </p>
        </div>
    );
};

export default Login;


