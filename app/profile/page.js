'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'




const ProfilePage = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [userData, setUserData] = useState();

  console.log(session);

  useEffect(() => {

    if (!session) {
      router.push("/login");
    }

    else {

      setUserData(session.user);
    }
  }, [session])


  // const [data, setData] = useState("");


  // const handleLogoutClick = async() =>{
  //   try{
  //     const res = await axios.get('api/users/logout');
  //     console.log(res);
  //     window.alert("User logged out successfully");
  //     router.push("/login");
  //   }
  //   catch(err){
  //     console.log(err.message);
  //   }
  // }


  // const getUserDetails = async()=>{
  //    const res = await axios.get('api/users/me');
  //    console.log(res.data);
  //    setData(res.data.data._id);
  // }


  return (
    <div className='h-[80vh] pt-20'>
      <div>
        Profile page
      </div>

      <div>
        {
          userData && userData.name
        }
      </div>
      <div>
        {
          userData && userData.email
        }
      </div>
      {
        userData && <Image src={userData.image} width={100} height={100} />
      }
    </div>
  )
}

export default ProfilePage