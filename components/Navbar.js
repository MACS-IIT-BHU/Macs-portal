"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const path = usePathname();
  const { data: session } = useSession();
  const [userData, setUserData] = useState();
  const [names, setName] = useState(null);

  useEffect(() => {
    if (session) {
      setUserData(session.user);
      let st = session.user?.name || " ";
      let k = st.indexOf("5-");
      setName(k !== -1 ? st.substring(0, k) + "     " : st);
    }
  }, [session]);

  return (
      <nav className="w-full fixed z-20 bg-gradient-to-r from-cyan-600 to-cyan-300 shadow-md backdrop-blur-lg">
        <div className="flex justify-between items-center px-6 py-3 md:py-4">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setNavbar(!navbar)}>
            {navbar ? <RxCross1 size={25} color="white" /> : <RxHamburgerMenu size={25} color="white" />}
          </button>

          {/* Navbar Links */}
          <ul
              className={`absolute left-0 right-0 top-full w-full bg-gradient-to-r from-cyan-600 to-cyan-500/60 md:static md:flex md:w-auto md:bg-transparent transition-all duration-300 gap-4${
                  navbar ? "flex flex-col gap-3 py-4 px-6" : "hidden md:flex"
              }`}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/announcements", label: "Events" },
              { href: "/articles", label: "Articles" },
              { href: "/gallery", label: "Gallery" },
              { href: "/teams", label: "Team" },
              { href: "/students", label: "Students" },
            ].map(({ href, label }) => (
                <li key={href} className={`px-3 py-2 rounded-lg transition-transform hover:scale-105 hover:bg-white ${path === href ? "bg-white" : ""}`}>
                  <Link href={href} className="text-black font-semibold hover:text-cyan-900">
                    {label}
                  </Link>
                </li>
            ))}
          </ul>


          {/* User Auth Section */}
          <div className="hidden md:flex items-center gap-6">
            {userData ? (
                <div className="flex items-center gap-4">
                  <span className="text-white font-semibold">Welcome, {names}</span>
                  <button onClick={() => signOut()} className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all">Sign Out</button>
                </div>
            ) : (
                <Link href="/login" className="bg-white text-cyan-900 font-semibold py-2 px-5 rounded-lg shadow-lg hover:scale-105 transition-transform">Join Us</Link>
            )}
          </div>
        </div>
      </nav>
  );
}
