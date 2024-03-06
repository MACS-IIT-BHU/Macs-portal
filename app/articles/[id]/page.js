"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axios.get(`/api/blog/?id=${params.id}`);
        console.log(res.data.blog);
        setBlog(res.data.blog);
      } catch (err) {
        console.log(err);
      }
    };

    getBlog();
  }, []);
  return (
    <div className="w-[100vw] pt-12 min-h-[75vh]">
      {blog && (
        <div className="px-[10vw] flex flex-col gap-4 items-center w-[100vw]">
          <img src={blog.img} width={500} height={500} alt="anurag" />
          <div className="mt-12">{blog.title}</div>
          <div dangerouslySetInnerHTML={{ __html: blog.blogContent }}></div>
        </div>
      )}
    </div>
  );
};

export default Page;
