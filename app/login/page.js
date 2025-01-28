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
    console.log(process.env);
    console.log("HEllo world!");
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
    <div className="h-[80vh] flex items-center justify-center flex-col gap-6 bg-gray-50 text-gray-800">
  <button
    onClick={handleLoginClick}
    className="px-6 py-3 rounded-lg border border-gray-300 shadow-sm bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
  >
    Login/Signup with Google
  </button>
  <button
    onClick={() => signOut()}
    className="px-6 py-3 rounded-lg border border-gray-300 shadow-sm bg-red-600 text-white font-medium hover:bg-red-700 hover:shadow-lg transition-all duration-200"
  >
    Sign Out
  </button>
  
  <p className="text-lg font-medium">
    {userData ? userData.name : "User not signed in"}
  </p>
</div>

  );
};

export default Login;
