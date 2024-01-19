"use client";
import Link from "next/link";
import smalllogo from "@/public/home/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Bitter,
  Monomaniac_One,
  Montserrat,
  Nanum_Brush_Script,
} from "next/font/google";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Murecho } from "next/font/google";

import { useEffect } from "react";
import Cookies from "js-cookie";

// import { Murecho } from 'next/font/google'

const murecho = Murecho({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const path = usePathname();
  const [token, setToken] = useState(null);

  const { data: session } = useSession();

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (session) {
      setUserData(session.user);
    }
  }, [session]);
  console.log(path);
  // useEffect(() => {
  //     const token = Cookies.get('token'); // Replace 'token' with the name of your authentication cookie

  //     if (token) {
  //       // The user is signed in
  //       console.log('User is signed in');
  //       setToken(token);
  //       // You can perform other actions here, like redirecting to a dashboard or showing a "Sign Out" button.
  //     } else {
  //       // The user is not signed in
  //       console.log('User is not signed in');
  //       // You can show the login and signup links.
  //     }
  //   }, []);

  return (
    <div>
      <nav
        className={`w-full navbar-hero md:pb-2 bg-gradient-to-r to-cyan-300 from-cyan-600 fixed z-20 ${murecho.className}`}
      >
        <div
          className={`relative mx-4  px-4 md:flex md:justify-between ${
            navbar ? "" : "h-16"
          }`}
        >
          <div className="md:hidden justify-self-start grow">
            <div className="flex items-center justify-between pt-2 md:py-5 md:block">
              <div>
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <RxCross1 size={25} color="white" />
                  ) : (
                    <RxHamburgerMenu size={25} color="white" />
                  )}
                </button>
              </div>

              <div className="md:invisible sm:visible py-5">
                {userData ? (
                  <Link href="/profile">Welcome, {userData.name} </Link>
                ) : (
                  <div className="flex items-center justify-center gap-2 px-2">
                    <Link
                      href="/login"
                      className="cursor-pointer  px-5 py-2  rounded-3xl bg-[#146c94] b_shadow translate-x-5"
                    >
                      Login
                    </Link>
                    <Link
                      href="/login"
                      className="bg-white text-black py-2 px-5 b_shadow rounded-r-3xl text-right"
                    >
                      Signup
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="justify-self-start">
            <div
              className={`pb-3 md:block md:pb-0 md:mt-0 md:px-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className={`flex flex-col p-4 md:pb-2 md:pt-0 mt-4 border rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 md:space-y-0 space-y-4 ${montserrat.className}`}
              >
                <li
                  className={`px-2 py-3 hover:bg-white rounded-b-lg ${
                    path == "/" ? "bg-white" : ""
                  }`}
                >
                  <Link
                    href="/"
                    className="font-medium text-black/75 hover:text-black/100 my-8"
                  >
                    Home
                  </Link>
                </li>

                <Link
                    href="/announcements"
                    className="font-medium  text-black/75 hover:text-black/100 my-8"
                  >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${
                      path == "/announcements" ? "bg-white" : ""
                    }`}
                  >

                      Events
                  </li>
                </Link>
                <Link
                    href="/articles"
                    className="font-medium  text-black/75 hover:text-black/100 my-8"
                  >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${
                      path == "/articles" ? "bg-white" : ""
                    }`}
                  >
                      Articles
                  </li>
                </Link>
                
                <Link
                    href="/gallery"
                    className="font-medium  text-black/75 hover:text-black/100 my-8"
                  >
                  <li
                    className={`px-2 py-3 hover:bg-white rounded-b-lg ${
                    path == "/gallery" ? "bg-white" : ""
                    }`}
                  >
                  
                    Gallery
                  </li>
                </Link>

                <Link
                    href="/teams"
                    className="font-medium  text-black/75 hover:text-black/100 my-8"
                  >

                <li
                  className={`px-2 py-3 hover:bg-white rounded-b-lg ${
                    path == "/teams" ? "bg-white" : ""
                  }`}
                >
                    Team
                </li>
                </Link>
                <Link
                    href="/students"
                    className="font-medium  text-black/75 hover:text-black/100 my-8"
                  >

                <li
                  className={`px-2 py-3 hover:bg-white rounded-b-lg ${
                    path == "/students" ? "bg-white" : ""
                  }`}
                >
                    Students
                </li>
                </Link>

              </ul>
            </div>
          </div>
          <div className="absolute   invisible md:visible top-0 left-[50%] -translate-x-[50%] translate-y-[5%]">
            <center>
              <Image src={smalllogo} width={180} alt="abc" />
            </center>
          </div>

          <div className="invisible md:visible ">
            {userData ? (
              <>
                <Link href="/profile">Welcome, {userData.name} </Link>
                <button
                  onClick={() => signOut()}
                  className="px-3 py-2 rounded border"
                >
                  signOut
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2  px-2 ">
                <Link
                  href="/login"
                  className="cursor-pointer  px-5 py-2  rounded-3xl bg-[#146c94] b_shadow translate-x-5"
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className="bg-white text-black py-2 px-5 b_shadow rounded-r-3xl text-right"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
