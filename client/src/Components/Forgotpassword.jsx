import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Forgotpassword = () => {
    const {id,token}=useParams();

    const history =useNavigate();

    const userValid=async()=>{
        const res=await fetch(`http://localhost:4000/api/user/forgotpassword/${id}/${token}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data=await res.json()

        if(data.status==200){
            console.log("user valid");
        }else{
            history("*")
        }
    }
    useEffect(()=>{
        userValid()
    },[])
    return (
        <>
             <section>
             <div className="form_data">
                <div className="form_heading">
                    <h1>Enter a New Password</h1>
                </div>
                 <form>
                    <div className="form_input">
                        <lable htmlFor="password"></lable>
                        <input type="password" value={email} onChange={setVal} name="password" id="email" placeholder='Password'></input>
                    </div>
                    <button className="btn_3" onClick={sendLink}>Change</button>
                </form>
            </div>
            </section>
        </>
    );
};

export default Forgotpassword;