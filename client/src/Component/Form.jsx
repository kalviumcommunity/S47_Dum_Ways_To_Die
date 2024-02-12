import React, { useState } from 'react';
import axios from 'axios';
import "./Form.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const [name, setName] = useState("");
  const [died, setDied] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [error,setError]=useState('')
  const navigate = useNavigate()
  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/adddata",{name, died, reason, date, location})
      .then(result => {console.log(result)
        if(result.data.message){
          setError(result.data.message)
        }else{
          navigate('/')
        }
  })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <h2>Add Entity</h2>
       
        <div>
          <label>Name</label>
          <input type="text"
            placeholder='Enter name'
            required
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Died</label>
          <input type="text"
            placeholder='Enter cause of death'
            required
            onChange={(e) => setDied(e.target.value)} />
        </div>
        <div>
          <label>Reason</label>
          <input type="text"
            placeholder='Enter reason'
            required
            onChange={(e) => setReason(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type="text"
            placeholder='Enter date'
            required
            onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Location</label>
          <input type="text"
            placeholder='Enter location'
            required
            onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button type='submit'>
          Submit
        </button>
        <Link to="/">
          <button className='back'>Back</button>
        </Link>
        {error && <p style={{color:'red',textAlign:"center"}}>Date must be in "YYYY-MM-DD"</p>}
      </form>
    </div>
  );
};

export default Form;
