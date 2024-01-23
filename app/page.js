"use client";
import Hero from "@/components/Home/hero";
import Articles from "@/components/Home/articles";
import Alums from "@/components/Home/alums";
import Image from "next/image";
import Announcements from "@/components/Home/announcements";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen overflow-hidden">
      <Hero />
      <Articles />
      <Alums />
      <Announcements />
    </main>
  );
}
