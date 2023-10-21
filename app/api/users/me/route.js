import { getDataFromToken } from "@/helpers/getDataFromToken";


import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"
import { connect } from "@/dbConfig/dbConfig";

connect();


export async function GET(req){
    try{
        const userId = await getDataFromToken(req);
        console.log(userId);
       const user = await User.findById({_id: userId}).select("-password -isAdmin");

       return NextResponse.json(
        {
            message:"User found",
            data: user
        }
       )
    }
    catch(err){
        return NextResponse.json({error: err.message}, {
            status: 500,
        })
    }
}