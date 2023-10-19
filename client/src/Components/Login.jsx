 import React, { useState } from 'react';
 import {NavLink} from "react-router-dom";
 import  "./mix.css";
  
 
 const Login = () => {
    const [passShow,setPassShow]=useState(false);

    const [inpval,setInpval]=useState({
        email:"",
        password:""
    });

    //console.log(inpval);
    const setVal =(e)=>{
        //console.log(e.target.value);
    const {name,value}=e.target;

    setInpval(()=>{
       return{
           ...inpval,
           [name]:value
       }
    })
   };

   const loginUser=async(e)=>{
      e.preventDefault();

      const {email,password}=inpval

      if(email===""){
        alert("pleas put your email");
      }else if(!email.includes("@")){
        alert("enter valid email");
      }else if(password===""){
        alert("pleas enter passwoed")
      }else if(password.length<8){
        alert("password must be 8 charecters");
      }else{
        alert("user login successfully");
         
        const data=await fetch("http://localhost:4000/api/user/login",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              email,password
          })
         });

         const res = await data.json();
         console.log(res);

      }
      
   }

   return (
     <>
         <section>  
        <div className="form_data">
            <div className="form_heading">
                <h1>Welcome to Login</h1>
            </div>
            <form>
                <div className="form_input">
                    <lable htmlFor="email"></lable>
                    <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Email'/>
                </div>
                <div className="form_input">
                    <lable htmlFor="password"></lable>
                    <div className='two'>
                    <input type={!passShow ? "password":"text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Password'/>
                    <div id='show' onClShowpassick={()=>setPassShow(!passShow)}>
                        {!passShow ? "Show":"Hide"}
                    </div>
                    </div>
                </div>
                 <button className='btn_2' onClick={loginUser}>Login</button>
                 <p>Don't have an Account? <NavLink to="/register">Register here</NavLink></p>
                 <p>Forgot Password! <NavLink to="/password-reset">click here</NavLink></p>
            </form>
        </div>
      </section>
     </>
   )
 }
 
 export default Login