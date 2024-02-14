import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css"
const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  const Handlelogin = (e) => {
    e.preventDefault();
    if (!isValid) return;

    navigate('/Main-page');

    axios
      .post('http://localhost:3000/login', { name, password, email })
      .then((res) => {
        const token = res.data.token;
        document.cookie = `token=${token}; expires=Fri, 07 Aug 2050 00:00:00 GMT;`;
        navigate('/Main-page');
      })
      .catch((err) => console.log(err));
  };

  const setcookies = (key, value) => {
    document.cookie = `${key} = ${value}`;
  };

  useEffect(() => {
    if (name === '' || password === '' || email === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [name, password, email]);

  return (
    <>

    <div className='body'>
      <form onSubmit={Handlelogin}>
        <div>
        <h1>LOGIN</h1>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            onChange={(e) => {
              setcookies('Name', e.target.value);
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Passowrd</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            onChange={(e) => {
              setcookies('Password', e.target.value);
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            onChange={(e) => {
              setcookies('Email', e.target.value);
              setEmail(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
    
      <button
     
        className="back"
        onClick={Handlelogin}
      >
        Submit
      </button>
    </>
  );
};

export default Login;