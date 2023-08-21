import Hero from "@/components/Home/hero";
import Articles from "@/components/Home/articles";
import Alums from "@/components/Home/alums";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Hero />
      <Articles />
      <Alums />
    </main>
  )
}
