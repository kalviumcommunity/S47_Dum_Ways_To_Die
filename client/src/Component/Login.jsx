import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const Handlelogin = () =>{
    navigate("/Main-page")

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
      onChange={(e) => setcookies("Name",e.target.value)} />
  </div>
  <div>
    <label>Passowrd</label>
    <input type="password"
      placeholder='Enter Your Password'
      required
      onChange={(e) => setcookies("Password",e.target.value)} />
  </div>
  <div>
    <label>Email</label>
    <input type="text"
      placeholder='Enter Your Email'
      required
      onChange={(e) => setcookies("Email",e.target.value)} />
  </div>
  </form>
     <button style={{textAlign:"center",position:"relative",left:"400px",backgroundColor:"green"}} className='back' onClick={Handlelogin}>Submit</button>    
    </div>
  )
}

export default Login




