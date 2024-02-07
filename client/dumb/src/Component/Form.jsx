import React, { useState } from 'react';
import axios from 'axios';
import "./Form.css";
import { Link } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState("");
  const [died, setDied] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/adddata",{name, died, reason, date, location})
      .then(result => console.log(result))
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
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Died</label>
          <input type="text"
            placeholder='Enter cause of death'
            onChange={(e) => setDied(e.target.value)} />
        </div>
        <div>
          <label>Reason</label>
          <input type="text"
            placeholder='Enter reason'
            onChange={(e) => setReason(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type="text"
            placeholder='Enter date'
            onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Location</label>
          <input type="text"
            placeholder='Enter location'
            onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button type='submit'>
          Submit
        </button>
        <Link to="/">
          <button className='back'>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
