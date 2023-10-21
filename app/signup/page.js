'use client'

import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import axios from 'axios'




const SignupPage = () => {

  const router = useRouter();


  const [user, setUser] = useState({
    email:"",
    password:"",
    username:"",
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setUser((prev)=>({
      ...prev,
      [e.target.name] : e.target.value
    }));
  }


  const handleSignup = async() =>{
        try{
          setLoading(true);

          const res = await axios.post("/api/users/signup",user);

          console.log(res.data);
          router.push("/login");

        }
        catch(err){
          console.log(err.message);
          window.alert(err.message);
        }

        finally{
          setLoading(false)
        }

  }

  useEffect(()=>{
     if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
        setButtonDisabled(false);
     }

     else{
      setButtonDisabled(true);
     }
  },[user])


  return (
    <div className='h-[80vh] flex items-center justify-center flex-col gap-4'>
        <p>{loading ? "Processing" : "Signup"}</p>
        <input onChange={handleChange} name="username" type='text' placeholder='enter username' className='text-black border px-4 py-2 rounded-md  border-black '></input>
        <input onChange={handleChange} type='text' name="email" placeholder='enter email' className='text-black border px-4 py-2 rounded-md  border-black '></input>
        <input onChange={handleChange} type='password' name="password" placeholder='enter password' className='text-black border px-4 py-2 rounded-md  border-black '></input>
        <button onClick={handleSignup} className='border py-2 px-3 rounded hover:scale-105 transition-all delay-150' >{buttonDisabled ? "Fill all details first" : "Submit"}</button>
        <Link href='/login'>Visit Login Page</Link>
    </div>
  )
}

export default SignupPage