 import React from 'react';
 import Login from '../src/Components/Login';
 import Register from '../src/Components/Register';
 import Passwordreset from '../src/Components/Passwordreset';
 import Forgotpassword from '../src/Components/Forgotpassword';
 import {Routes,Route} from 'react-router-dom';
 
 const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
       <Route path="/password-reset" element={<Passwordreset/>}/>
       <Route path="/forgotpassword/:id/:token" element={<Forgotpassword/>}/>
      </Routes>
    </>
  );
 };
 
 export default App;