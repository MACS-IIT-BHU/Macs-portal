import { getDataFromToken } from "@/helpers/getDataFromToken";
import { getProviders } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Blog from "@/models/blogModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log(id);

    if (id) {
      const blog = await Blog.findById(id);
      console.log(blog);
      return NextResponse.json({
        message: "requested Blog Found",
        blog: blog,
        status: 201,
      });
    }

    const allBlogs = await Blog.find({});

    return NextResponse.json({
      message: "Blogs Found",
      blogs: allBlogs,
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    console.log(reqBody);
    const { blog, credentials, title, img } = reqBody;

    const { email, password } = credentials;

    if (email === "test123@gmail.com" && password === "test123") {
      const newBlog = new Blog({
        blogContent: blog,
        writer: "Anurag Kamboj",
        readtime: "5min",
        title: title,
        img: img,
      });
      const savedBlog = await newBlog.save();
      console.log(savedBlog);

      return NextResponse.json({
        message: "Blog created successfully",
        blog: savedBlog,
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "U dont have admin credentials",
        status: 401,
      });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal server error" });
  }
}
