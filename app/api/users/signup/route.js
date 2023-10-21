import {connect} from '@/dbConfig/dbConfig'


import User from "@/models/userModel"


import { NextRequest, NextResponse } from 'next/server'


import bcryptjs from "bcryptjs"

connect()



export async function POST(req){
  try{
      const reqBody = await req.json();

      const{username,email,password} = reqBody

      console.log(reqBody);


      //checking if user already exists

     const doesUserExists = await User.findOne({email});


     if(doesUserExists) {
        return NextResponse.json({error: "User already exists"}, {status:400})
     }


     //hashing password

     const salt = await bcryptjs.genSalt(10);
     const hashedPassword = await bcryptjs.hash(password, salt);

     const newUser = new User({
        username,
        email,
        password: hashedPassword,
     })


    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({message:"User created successfully", success : true, savedUser})

         
  }

  catch(err){
    return NextResponse.json({error: err.message}, {status : 500})
  }
}