"use client";
// Import necessary modules and styles
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UserEditForm from "@/components/editUserComponent";
import Image from 'next/image'
import { AiFillBuild, AiFillWeiboCircle, AiOutlineDownload, AiOutlineGithub, AiOutlineGlobal, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'


const UserProfilePage = ({ params }) => {
  const { data: session } = useSession();

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/users/me?user=${params.id}`);
        setUser(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.id]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleFormSubmit = async (updatedUserData) => {
    try {
      const res = await axios.post(`/api/users/me?user=${params.id}`, {
        updatedUserData,
      });

      setUser(res.data.data);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-[100vh] mb-20 pt-20 flex justify-center ">
      <div className="absolute  top-[63px] md:top-[72px] h-48 w-screen      bg-gradient-to-r to-cyan-300 from-cyan-600"></div>
      {user && (
        <div className="flex flex-col">
          <div className="h-full md:px-[100px]  flex flex-col ">
            <div className="flex flex-col md:flex-row gap-2 ">
              <div className="relative mt-10 grid place-items-center h-5/6 p-2  ">
                <div className="h-[210px] w-[210px]   rounded-tl-[43px] rounded-tr-[75px] rounded-br-[43px] rounded-bl-[75px] shadow-md  overflow-hidden grid place-items-center 
                    before:w-[210px] before:h-[210px] 
                    before:z-10 before:absolute before:content-['']  
                    before:rounded-tl-[43px] before:rounded-br-[43px] before:rounded-bl-[75px] before:rounded-tr-[75px] 
                    bg-white">
                  <div className="h-[200px] w-[200px]   rounded-tl-[43px] rounded-tr-[75px] rounded-br-[43px] rounded-bl-[75px] shadow-md  overflow-hidden grid place-items-center 
                    before:w-[200px] before:h-[200px] 
                    before:z-10 before:absolute before:content-['']  
                    before:rounded-tl-[43px] before:rounded-br-[43px] before:rounded-bl-[75px] before:rounded-tr-[75px] 
                    before:bg-blend-overlay before:bg-[#146C94]/40">
                    {/* give url image here */}
                    <Image src='/home/pexels-pixabay-220453.jpg' alt='' width={200} height={200} className="relative -top-10" />
                  </div>
                </div>
                {user && session && user.email === session.user.email ? (
                  <>{!editMode && <button onClick={handleEditClick} className="border relative bg-blue-500 text-white mt-5 px-10 text-xl rounded-md">Edit</button>}</>
                ) : null}
              </div>
              <div className="relative grid place-items-center md:place-items-start md:flex md:flex-col w-full p-10 md:p-0 md:w-4/5 md:top-24 xl:top-36">
                <h2 className="relative text-4xl font-bold mb-4 text-black md:text-white text-center  line-clamp-2">{user.name}</h2>
                {editMode ? (
                  <UserEditForm user={user} onSubmit={handleFormSubmit} />
                ) : (
                  <>
                
                    <div className="relative text-xl  mt-2">yearOfJoining: {user.yearOfJoining}</div>
                    <div className="mt-6">


                      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>


                      {/* <p>{user.about}</p> */}
                    </div>
                    <div className="mt-4 text-xl p-2 text-black/40">Skills: {user.skills}</div>
                    <div className="mt-4 flex gap-2 items-center ">
                      <AiOutlineMail size={25} /> <span className="text-blue-400/60 underline" >{user.email}</span>
                    </div>
                    <div className="flex items-center gap-10 mt-2">
                      <a className="flex gap-2 items-center" href="user.resumeUrl"><AiOutlineDownload size={25} /><span className="text-blue-400/60 underline">Resume</span></a>
                      <a className="flex gap-2 items-center" href="#"><AiOutlineGlobal size={25} /><span className="text-blue-400/60 underline">Portfolio</span></a>
                    </div>
                    <div className="w-full h-[2px] bg-blue-500/40 mt-5 rounded-md"></div>
                    <div className="mt-4 flex gap-4 items-center justify-center">
                      <div><a href={user.github}><AiOutlineGithub size={30} /></a></div>
                      <div><a href={user.linkedin}><AiOutlineLinkedin size={30} color="skyblue" /></a></div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>


      )}
    </div>
  );
};

export default UserProfilePage;




// {editMode ? (
//   <UserEditForm user={user} onSubmit={handleFormSubmit} />
// ) : (
//   <>

//   </>
//   // <>
//   //   <p className="text-gray-600 mb-2">Email: {user.email}</p>
//   //   <p className="text-gray-600 mb-2">
//   //     Year of Joining: {user.yearOfJoining}
//   //   </p>
//   //   <p className="text-gray-600 mb-2">
//   //     Skills: {user.skills}
//   //     {/* {user.skills.join(", ")} */}
//   //   </p>
//   //   <p className="text-gray-600 mb-2">
//   //     About: {user.about}
//   //     {/* {user.skills.join(", ")} */}
//   //   </p>
//   //   <p className="text-gray-600 mb-2">
//   //     Resume:{" "}
//   //     <a
//   //       href={user.resumeUrl}
//   //       download
//   //       className="text-blue-600 hover:underline"
//   //     >
//   //       Download
//   //     </a>
//   //   </p>
//   //   <p className="text-gray-600 mb-2">GitHub: {user.github}</p>
//   //   <p className="text-gray-600 mb-2">LinkedIn: {user.linkedin}</p>
//   // </>
// )}

// {user && session && user.email === session.user.email ? (
//   <>{!editMode && <button onClick={handleEditClick}>Edit</button>}</>
// ) : null}

// <div className="w-full h-[2px] rounded-md bg-slate-400"></div>
// </div>