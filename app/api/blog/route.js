import { getDataFromToken } from "@/helpers/getDataFromToken";
import { getProviders } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Blog from "@/models/blogModel";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("Fetching blog with ID:", id);

    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        window.alert("Blog not found!");  // 🔹 Show alert if blog is missing
        return NextResponse.json({ message: "Blog not found", status: 404 });
      }
      return NextResponse.json({ message: "Blog found", blog, status: 200 });
    }

    const allBlogs = await Blog.find({});
    return NextResponse.json({ message: "Blogs found", blogs: allBlogs, status: 200 });
  } catch (err) {
    console.error(err);
    window.alert("Internal server error while fetching blogs.");  // 🔹 Show alert for server error
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}

export async function POST(req) {
  try {
    const reqBody = await req.json();
    console.log("Received Blog Data:", reqBody);

    const { blog, credentials, title, img } = reqBody;
    if (!blog || !title || !img || !credentials?.email || !credentials?.password) {
      return NextResponse.json({ message: "All fields are required", status: 400 });
    }

    const { email, password } = credentials;
    if (email !== "test123@gmail.com" || password !== "test123") {
      return NextResponse.json({ message: "Unauthorized", status: 401 });
    }

    const newBlog = new Blog({
      blogContent: blog,
      writer: "MACS",
      readtime: "5min",
      title,
      img,
    });

    const savedBlog = await newBlog.save();
    console.log("✅ Blog saved:", savedBlog);

    return NextResponse.json({ message: "Blog created successfully", blog: savedBlog, status: 201 });
  } catch (err) {
    console.error("❌ Error in POST:", err);
    return NextResponse.json({ message: "Internal server error", status: 500 });
  }
}
