import {connect} from '@/dbConfig/dbConfig'


import User from "@/models/userModel"


import { NextRequest, NextResponse } from 'next/server'


import bcryptjs from "bcryptjs"

import jwt from 'jsonwebtoken'

connect()



export async function POST(req){

    try{
          const reqBody = await req.json();
          const {email,password} = reqBody;
          console.log(reqBody);


          //check if user exists:

          const user = await User.findOne({email});

          if(!user){
            return NextResponse({error:"User not found"},{status:"400"});
          }

          const validPassword = await bcryptjs.compare(password, user.password);

          if(!validPassword){
            return NextResponse({error:"Invalid Password"},{status:"400"});
          }

          const tokenData ={
            id : user._id,
            username : user.username,
            email: user.email,
          } 

          // creating a token
          const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"7d"})

          const response = NextResponse.json({
            message:"Logged in successfully",
            success :true
          })

          response.cookies.set("token", token,{
            httpOnly : true
          })


          return response;



    }
    catch(err){
      return NextResponse.json({error: err.message},{status: 500})
    }
}

