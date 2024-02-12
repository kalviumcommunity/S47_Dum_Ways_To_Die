// App.js
import React from 'react';
import Entities from './Component/Entities';
import Form from './Component/Form';
import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateData from './Component/Update_entities';

const App = () => {
  return (
      <>
        {/* <Entities></Entities> */}
      
        <Routes>
          <Route path="/" element={<Entities />} />
          <Route path='/Add-Entities' element={<Form />}></Route>
          <Route path='/Update-Entities/:id' element={<UpdateData/>}></Route>
        </Routes>
      </>
  );
};

export default App;
