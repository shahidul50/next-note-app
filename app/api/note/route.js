import { connectMongoDB } from "@/lib/mongodb";
import Note from "@/models/noteModel";
import { NextResponse } from "next/server";

export async function POST(request){
    const { title, description, userId } = await request.json();
    await connectMongoDB()
    await Note.create({title,description,user:userId})
    return NextResponse.json({message: "Note created successfully.", success: true},{status:201})
}

export async function GET(request){
    const userId = request.nextUrl.searchParams.get('userId')
    await connectMongoDB();
    const notes = await Note.find({user:userId});
    return NextResponse.json({ notes });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    console.log('userId', id);
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: "Note deleted Successfully.", success: true }, { status: 200 });
  }

