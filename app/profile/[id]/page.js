"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const ProfilePage = ({ params }) => {
  const router = useRouter();

  function replacePercentageWithAt(inputString) {
    // Using a regular expression to replace all occurrences of '%'
    const resultString = inputString.replace(/%40/g, "@");
    return resultString;
  }

  // console.log(params.id);

  const email = replacePercentageWithAt(params.id);

  // console.log(email);

  const { data: session } = useSession();

  const [userData, setUserData] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const [about, setAbout] = useState("");

  // console.log(session);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      setUserData(session.user);
    }
  }, [session]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/users/me`);
        const userArray = res.data.data;
        const user = userArray.filter((user) => user.email == email);
        // console.log(userArray);
        // console.log(user);

        setAbout(user[0].about);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDataChange = (e) => {
    setAbout(e.target.value);
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/api/users/me", {
      about: about,
    });
  };

  useEffect(() => {
    console.log(about);
  }, [about]);

  return (
    <div className="h-[80vh] pt-20 relative">
      <div>Profile page</div>

      <div>{userData && userData.name}</div>
      <div>{userData && userData.email}</div>
      {userData && <Image src={userData.image} width={100} height={100} />}

      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded border m-12 w-[100px] text-center"
      >
        Edit
      </button>

      {isOpen && (
        <div className="absolute w-[400px] top-[30%] left-[40%] border rounded h-[400px]">
          <div className="flex gap-4 flex-col m-4">
            <textarea
              onChange={handleDataChange}
              value={about}
              className="border px-2 py-1"
              placeholder="Enter about Yourself"
              rows={5}
            ></textarea>

            <button
              onClick={handleSubmit}
              className="px-3 py-2 rounded border text-center"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
