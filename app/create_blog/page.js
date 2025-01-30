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
      <CustomEditor initialData="" />
    </div>
  );
}

export default Home;
