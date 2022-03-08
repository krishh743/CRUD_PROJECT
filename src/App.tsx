import React from 'react';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/editUser/:id" element={<EditUser />}/>

       
        <Route path="/create" element={<Create />}/>

        {/* <Route path="/" element={<Page />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/AddUser" element={<AddUser/>}/> */}
        {/* <Route path="/Home" element={<Home/>}/> */}
      </Routes>
      
   
    </div>
  );
}

export default App;
