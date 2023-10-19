import React,{useState} from 'react';
import "./mix.css";
import {NavLink} from 'react-router-dom';

const Register = () => {
    const [passShow,setPassShow]=useState(false);
    const [inpval,setInpval]=useState({
        fname:"",
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
    }

     const addUserdata=async(e)=>{
          e.preventDefault()

          const {fname,email,password}=inpval;

          if(fname===""){
            alert("please enter your name");
          }else if(email===""){
            alert("pleas put your email");
          }else if(!email.includes("@")){
            alert("enter valid email");
          }else if(password===""){
            alert("pleas enter passwoed")
          }else if(password.length<8){
            alert("password must be 8 charecters");
          }else{
           alert("user registration successfully");
           const data=await fetch("http://localhost:4000/api/user/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:fname,email,password
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
                <h1>Welcome to Register</h1>
            </div>
            <form>
            <div className="form_input">
                    <lable htmlFor="fname"></lable>
                    <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Name'/>
                  
                </div>

                <div className="form_input">
                    <lable htmlFor="email"></lable>
                    <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Email'/>
                </div>
                <div className="form_input">
                    <lable htmlFor="password"></lable>
                    <div className='two'>
                    <input type={!passShow ? "password":"text"} onChange={setVal} value={inpval.password} name="password" id="Password" placeholder='Password'/>
                    <div className="showpass" onClick={()=>setPassShow(!passShow)}>
                        {!passShow ? "Show":"Hide"}
                    </div>
                    </div>
                </div>
                 <button className='btn_1' onClick={addUserdata}>Submitt</button>
                 <p>Aleady have have an Account? <NavLink to="/">Log in</NavLink></p>
            </form>
        </div>
      </section>
        </>
    );
};

export default Register;