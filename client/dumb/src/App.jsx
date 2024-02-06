// App.js
import React from 'react';
import Entities from './Component/Entities';
import Form from './Component/Form';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <>
        {/* <Entities></Entities> */}
      
        <Routes>
          <Route path="/" element={<Entities />} />
          <Route path='/insert' element={<Form />}></Route>
        </Routes>
      </>
  );
};

export default App;
