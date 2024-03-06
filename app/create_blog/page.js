// app/page.js (App Router)
// pages/index.js (Pages Router)
"use client"; // only in App Router

import React from "react";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("../../components/custom-editor");
  },
  { ssr: false }
);

function Home() {
  return (
    <div className="pt-20 w-[100%]">
      <CustomEditor initialData="<h1>Hello from Anurag Kamboj, what would you like to write today?</h1>" />
    </div>
  );
}

export default Home;
