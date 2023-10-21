import { NextResponse } from "next/server";


export async function GET(){
    try{
       const Response = NextResponse.json({
        message:"Logout Successfully",
        success: true
       })

       Response.cookies.set("token","",
       {httpOnly:true, expires: new Date(0)}
       )

       return Response;
    }
    catch(err){
        return NextResponse.json({error:err.message},{status: 500});
    }
}