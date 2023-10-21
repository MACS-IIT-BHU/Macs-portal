'use client'
import axios from 'axios'
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'


const ProfilePage = () => {
  const router = useRouter();

  const [data, setData] = useState("");


  const handleLogoutClick = async() =>{
    try{
      const res = await axios.get('api/users/logout');
      console.log(res);
      window.alert("User logged out successfully");
      router.push("/login");
    }
    catch(err){
      console.log(err.message);
    }
  }


  const getUserDetails = async()=>{
     const res = await axios.get('api/users/me');
     console.log(res.data);
     setData(res.data.data._id);
  }


  return (
    <div className='h-[80vh] pt-20'>
        ProfilePage
            <hr/>

            <h2>{data ? <Link href={`/profile/${data}`}>Go to edit ProfilePage</Link>: 'nothing'}</h2>
        <div className='m-4'>

           <button onClick={handleLogoutClick} className='px-3 py-2 rounded border bg-blue-500 hover:bg-blue-700 text-white font-[500]'>Logout</button>
           <button onClick={getUserDetails} className='px-3 py-2 rounded border bg-green-400 hover:bg-green-600 text-white font-[500]'>getUserDetails</button>
        </div>
        </div>
  )
}

export default ProfilePage