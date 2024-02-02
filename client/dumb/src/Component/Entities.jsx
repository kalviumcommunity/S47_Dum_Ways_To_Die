import { useState } from 'react'
import './Component.css'
import data from '../Data.json'

function Entities() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='webname'>
      DUMB WAYS TO DIE
    </div>
    <h1>{data[3].name}</h1>
    <h2>{data[3].died}</h2>
    <h4>{data[3].REASON}</h4>
    <h4>{data[3].DATE}</h4>
    <h4>{data[3].LOCATION}</h4>

<img className='simp' src="./images/pillow.png" alt="" />

    
     </>
  )
}

export default Entities
