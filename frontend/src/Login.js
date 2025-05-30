import React, { useState } from 'react';

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        }).then(res => res.json()).then(data => {localStorage.setItem('token', data.jwt);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder = "Username" />
            <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder = "Password" />
            <button type="submit">Login</button>
        </form>
    );

};

export default Login;