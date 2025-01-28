import { getDataFromToken } from "@/helpers/getDataFromToken";
import { getProviders } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Event from "@/models/eventModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req, res) {
  try {
    // const { searchParams } = new URL(req.url);
    // const id = searchParams.get("id");
    // console.log(id);

    // if (id) {
    //   const blog = await Blog.findById(id);
    //   console.log(blog);
    //   return NextResponse.json({
    //     message: "requested Blog Found",
    //     blog: blog,
    //     status: 201,
    //   });
    // }

    const allEvents = await Event.find({});

    return NextResponse.json({
      message: "Events Found",
      events: allEvents,
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
    const { event, email, password, title, date } = reqBody;



    if (email === "test123@gmail.com" && password === "test123") {
      const newEvent = new Event({
        eventContent: event,
        title: title,
        date: date,
      });
      const savedEvent = await newEvent.save();
      console.log(savedEvent);

      return NextResponse.json({
        message: "Blog created successfully",
        events: savedEvent,
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

export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Event ID is required" }, { status: 400 });
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Event deleted successfully",
      event: deletedEvent,
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
    );
  }
}

