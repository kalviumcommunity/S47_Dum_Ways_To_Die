import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Component.css';
import { Link,useNavigate } from 'react-router-dom'; 


const Display = () => {
  const navigate = useNavigate()
  const [sort,setSort]=useState('All')
  const [users, setUsers] = useState([]);
  const cookies = decodeURIComponent(document.cookie).split(';')
  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setUsers(response.data);
        console.log(cookies)
      })
      .catch(err => console.log(err));
  }, []);

  const HandleLogout = ()=>{
    document.cookie = "Name=; expires=Fri, 07 Aug 2023 00:00:00 UTC; path=/;"
    document.cookie = "Password=; expires=Fri, 07 Aug 2023 00:00:00 UTC; path=/;"
    document.cookie = "Email=; expires=Fri, 07 Aug 2023 00:00:00 UTC; path=/;"
    document.cookie = "token=; expires=Fri, 07 Aug 2023 00:00:00 UTC; path=/;"
    navigate('/')
    window.location.reload(true)
  }


  const HandelDelete=(id)=>{
    axios.delete(`http://localhost:3000/Delete-Entities/${id}`)
    .then(res=>{
      console.log(res)
      window.location.reload(true)
    }).catch(err=>console.log(err))
  }

  const handleDropDown=(e)=>{
    setSort(e.target.value)
  }
  const Sorted = sort=='All'?users:users.filter((data)=>data.location==sort)
  console.log(sort)
  return (
    <>
    <div>
  <select class="custom-dropdown" onChange={handleDropDown}>
    <option value="All">Select Category</option>
    <option value="North America">North America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
  </select>
</div>

     <div className='webname'>
      DUMB WAYS TO DIE
      <button  style={{textAlign:"center",position:"relative",left:"200px",backgroundColor:"red",color:"white"}} onClick={HandleLogout}>Logout</button>
    </div>
     <div>
      {cookies.map((data,index)=>{
        return(
          <h3  className='cookiess' key = {index}>{data}</h3>
        )
      })}
     </div>
    <div className="display-container">
      {Sorted.map(people => (
        <div key={people.id} className="person-container">
          <div className="info-container">
            <h1 className="person-name">Name: {people.name}</h1>
            <p className="died-info">
              <b>Died Due To:</b> {people.died}
            </p>
            <p className="description">
              <b>Description:</b> {people.reason}
            </p>
           
              <p className="date">  <b>   Date: </b> {people.date}     </p>
         
            <p className="location">
              <b>Location:</b> {people.location}
            </p>
          </div>
          <div>
            <img src={people.img} alt='' className='person-img' />
            <Link to={`/Update-Entities/${people._id}`}><button className='update'>Update</button></Link>
            <button onClick={()=>HandelDelete(people._id)} className='delete'>Delete</button>

         

          </div>
        </div>
      ))}
      
    </div>
    <Link to="/Add-Entities">
          <button className='add'>Add Data</button>
        </Link>  
       
    </>
  );
};

export default Display;
