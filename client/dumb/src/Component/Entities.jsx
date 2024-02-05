

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Component.css'; 

const Display = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Database')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
     <div className='webname'>
      DUMB WAYS TO DIE
    </div>
    <div className="display-container">
      {users.map(people => (
        <div key={people.id} className="person-container">
          <div className="info-container">
            <h1 className="person-name">Name: {people.name}</h1>
            <p className="died-info">
              <b>Died Due To:</b> {people.died}
            </p>
            <p className="description">
              <b>Description:</b> {people.REASON}
            </p>
           
              <p className="date">  <b>   Date: </b> {people.date}     </p>
         
            <p className="location">
              <b>Location:</b> {people.LOCATION}
            </p>
          </div>
          <div>
            <img src={people.img} alt='' className='person-img' />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Display;
