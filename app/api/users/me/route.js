import { getDataFromToken } from "@/helpers/getDataFromToken";
import { getProviders } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const user = searchParams.get("user");
    // const { user } = req.query || {};
    console.log(user);

    if (user) {
      // If user parameter is provided, fetch a specific user
      const response = await User.findById(user);

      if (response) {
        return NextResponse.json({
          message: "User found",
          data: response,
        });
      } else {
        return NextResponse.json({ message: "User not found" });
      }
    } else {
      // If no user parameter is provided, fetch all users
      const response = await User.find({});

      if (response && response.length > 0) {
        return NextResponse.json({
          message: "Users found",
          data: response,
        });
      } else {
        return NextResponse.json({ message: "No users found" });
      }
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    console.log(reqBody);

    const updatedUserData = reqBody.updatedUserData;

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const userId = searchParams.get("user");
    console.log(userId, "given user id");

    if (!userId) {
      return NextResponse.json({ message: "Invalid request" });
    }
    const user = await User.findById(userId);

    if (!user) {
      // If user with the specified ID is not found
      return NextResponse.json({ message: "User not found" });
    }

    (user.name = updatedUserData.name),
      (user.email = updatedUserData.email),
      (user.yearOfJoining = updatedUserData.yearOfJoining),
      (user.github = updatedUserData.github),
      (user.linkedin = updatedUserData.linkedin),
      (user.skills = updatedUserData.skills),
      (user.about = updatedUserData.about),
      // Save the updated user
      await user.save();

    return NextResponse.json({
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal server error" });
  }
}
