import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const UpdateData = () => {
    const {id} = useParams()
    const [name, setName] = useState("");
  const [died, setDied] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
    const Navigate = useNavigate('/')

    useEffect(()=>{
        axios.get('http://localhost:3000/Get/'+id)
        .then(res=>{
            console.log(res)
            setName(res.data.name)
            setDied(res.data.died)
            setReason(res.data.reason)
            setDate(res.data.date)
            setLocation(res.data.location)
        }).catch(err=>console.log(err))
    },[id])

    const Update=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/Update-ent/${id}`,{name,died,reason,date,location})
        .then(res=>{
            Navigate('/')
        }).catch(err=>console.log(err))
    }







  return (
    <div>
      <form onSubmit={Update}>
        <h2>UPDATE Entity</h2>
       
        <div>
          <label>Name</label>
          <input type="text"
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Died</label>
          <input type="text"
            placeholder='Enter cause of death'
            value={died}
            onChange={(e) => setDied(e.target.value)} />
        </div>
        <div>
          <label>Reason</label>
          <input type="text"
            placeholder='Enter reason'
            value={reason}
            onChange={(e) => setReason(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type="text"
            placeholder='Enter date'
            value={date}
            onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Location</label>
          <input type="text"
            placeholder='Enter location'
            value={location}
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


export default UpdateData;
