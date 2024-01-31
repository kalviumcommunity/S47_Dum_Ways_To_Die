import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='webname'>
      DUMB WAYS TO DIE
    </div>
    <h1>1 - Prabhu Bhatara</h1>
    <h2>BEAR SELFIE</h2>
    <h4> Prabhu Bhatara, a taxi driver from India, spotted a wounded bear near  the road.Despite having passengers <br /> in the back he hopped out to take    a selfie with it.The animal dragged him to the ground before <br /> mauling him to death</h4>
<img className='simp' src="https://preview.redd.it/sad-lisa-simpson-visiting-tombstone-of-her-dead-brother-bart-v0-8zu6z3xk90l91.png?width=640&crop=smart&auto=webp&s=f21f240bd95251c511af8f5afc2781b634dffdd8" alt="" />
<img className='huddy' src="https://img.freepik.com/premium-vector/halloween-concept-vivid-cartoon-illustration-grave-sites-stores-articles-books-games-apps-vibrant-detailed-image_387335-89.jpg" alt="" />

    
     </>
  )
}

export default App
