import { getDataFromToken } from "@/helpers/getDataFromToken";

import { getProviders } from "next-auth/react";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req) {
  try {
    const response = await User.find({});

    if (response) {
      return NextResponse.json({
        message: "Users found",
        data: response,
      });
    } else {
      return NextResponse.json({ message: "No Email Found" });
    }
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { about, email } = reqBody;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      // If user with the specified email is not found
      return NextResponse.json({ message: "User not found" });
    }

    // Update the 'about' field of the user
    user.about = about;

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

// export async function GET(req, res) {
//   try {
//     const { email } = req.query;

//     console.log(email);

//     const user = await User.find({ email: email });

//     return NextResponse.json({
//       message: "User found",
//       data: user,
//     });
//   } catch (err) {
//     return NextResponse.json(
//       { error: err.message },
//       {
//         status: 500,
//       }
//     );
//   }
// }
