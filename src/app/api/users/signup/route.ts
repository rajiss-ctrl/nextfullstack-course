import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse } from "next/server";
import  bcryptjs  from 'bcryptjs';





connect();

export async function POST(request: NextRequest){
    try {
       const reqBody = await request.json()
       const {username, email,password} = reqBody 
       console.log(reqBody)

       //check if user exist
      const user = await User.findOne({email})

      if(user){
        return NextResponse.json({error:"User Already exist"}, {status:400})
      }

      //hash password
      // const salt = bcryptjs.genSalt(10)
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password,salt)



      const newUser = new User({
        username,
        email,
        password: hashPassword,
      })
const savedUser = await newUser.save()
return NextResponse.json({
    message: "User created successfully",
    success:true,
    savedUser,
})
    } catch (error: any) {
      console.error('Error in POST request:', error);
     return NextResponse.json({error:error.message},{status:500})   
    }
}