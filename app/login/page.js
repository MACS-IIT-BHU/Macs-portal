"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import jwt from "jsonwebtoken";

import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [userData, setUserData] = useState();

  console.log(session);

  const secret = process.env.TOKEN_SECRET;
  console.log(secret);

  useEffect(() => {
    if (session) {
      setUserData(session.user);
      const token = jwt.sign({ email: session.email }, secret || "macssecret");
      console.log(token);
      localStorage.setItem("token", JSON.stringify(token));
      router.push(`/students`);
    }
  }, [session]);

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await axios.post("/api/users/login", user);

      console.log(res.data);
      router.push("/profile");
    } catch (err) {
      console.log(err.message);
      window.alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = async () => {
    const res = signIn("google");
    console.log(res);
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="h-[80vh] flex items-center justify-center flex-col gap-4">
      <button onClick={handleLoginClick} className="px-3 py-2 rounded border">
        Login/Signup with Google
      </button>
      <button onClick={() => signOut()} className="px-3 py-2 rounded border">
        signOut
      </button>
      {/* <p>{loading ? "Processing" : "Login"}</p>
        <input onChange={handleChange} name='email' type='text' placeholder='enter username' className='text-black border px-4 py-2 rounded-md  border-black '></input>
        <input onChange={handleChange} name='password' type='password' placeholder='enter password' className='text-black border px-4 py-2 rounded-md  border-black '></input>
        <button onClick={handleLogin} className='border py-2 px-3 rounded hover:scale-105 transition-all delay-150' >{buttonDisabled ? "Fill all details first" : "Submit"}</button>
        <Link href='/signup'>Visit Signup Page</Link> */}

      {userData ? userData.name : "User not signed in"}
    </div>
  );
};

export default Login;
