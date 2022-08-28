import React from 'react';
import './App.css';

//components
import NavBar from './components/NavBar';
import Alluser from './components/Alluser';
import AddUsers from './components/Addusers';
import CodeforInterview from './components/CodeforInterview';
import Edituser from './components/EditUser';
import NotFound from './components/NotFound';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/all' element= {<Alluser />}/>
        <Route path='/add' element= {<AddUsers />}/>
        <Route path='/' element= {<CodeforInterview />}/>
        <Route path="/edit/:id" element={<Edituser />} />
        <Route element={<NotFound />} />
      </Routes>   
    </BrowserRouter>
  );
}  
export default App;
