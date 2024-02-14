import React, { useState } from 'react';  
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [name, setName] = useState("");
    const navigate = useNavigate()
    const Handlelogin = () =>{
    navigate("/Main-page")

    axios.post("http://localhost:3000/login",{name,password,email})
    .then(res =>{
      const token = res.data.token;
      document.cookie = `token=${token}; expires=Fri, 07 Aug 2050 00:00:00 GMT;`
      navigate('/Main-page')
    })
   .catch(err => console.log(err))
    }


    const setcookies = (key,value) =>{
        document.cookie = `${key} = ${value}`
    }
    
  return (
    <div>
      <form onSubmit={Handlelogin}>
    <div>
    <label>Name</label>
    <input type="text"
      placeholder='Enter Your Name'
      required
      onChange={(e) => {setcookies("Name",e.target.value), setName(e.target.value)}} />
  </div>
  <div>
    <label>Passowrd</label>
    <input type="password"
      placeholder='Enter Your Password'
      required
      onChange={(e) => {setcookies("Password",e.target.value), setPassword(e.target.value)}} />
  </div>
  <div>
    <label>Email</label>
    <input type="email"
      placeholder='Enter Your Email'
      required
      onChange={(e) => {setcookies("Email",e.target.value) ,setEmail(e.target.value)}} />
  </div>
  </form>
     <button style={{textAlign:"center",position:"relative",left:"400px",backgroundColor:"green"}} className='back' onClick={Handlelogin}>Submit</button>    
    </div>
  )
}

export default Login




