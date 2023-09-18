
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(request){
   const {email, name} = await request.json()
   await connectMongoDB()
   await User.create({ name, email });
   return NextResponse.json({message: "User Created Successfully."}, { status: 201 });
}