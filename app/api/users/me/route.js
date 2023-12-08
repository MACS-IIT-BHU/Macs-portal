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
  const aboutData = req.body.about;

  console.log(aboutData);

  try {
    return NextResponse.json({ message: "hello world" });
  } catch (err) {
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
