import React,{useState} from 'react';

const Passwordreset = () => {
    const [email,setEmail]=useState("");

    const [message,setMessage]=useState("");

    const setVal=(e)=>{
        setEmail(e.target.value)
    }

    const sendLink=async(e)=>{
         e.preventDefault();

         const res=await fetch("http://localhost:4000/api/user/sendpasswordlink",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email})
         });
         const data=await res.json();

         if(data.status==200){
            setEmail();
            setMessage(true);
         }




    }
    return (
        <>
           <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Enter your Email</h1>
                </div>
                {message? <p>Password reset Link send Successfully in your Email</p>:""}
                <form>
                    <div className="form_input">
                        <lable htmlFor="email"></lable>
                        <input type="email" value={email} onChange={setVal} name="email" id="email" placeholder='Email'></input>
                    </div>
                    <button className="btn_3" onClick={sendLink}>Send</button>
                </form>
            </div>
            </section> 
        </>
    );
};

export default Passwordreset;