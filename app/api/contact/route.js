import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";
import {NextResponse} from "next/server";
import mongoose from "mongoose";

export async function POST(req) {

    const { fullname, email, message } = await req.json();

    // Log a message when the JSON is successfully parsed
    console.log('JSON parsed successfully:', { fullname, email, message });

    try {
      await connectDB();
      console.log('MongoDB connected successfully');

      // Create a new contact document in MongoDB
      await Contact.create({ fullname, email, message });

      // Return a success response
      return NextResponse.json({
        msg: ['Message sent successfully'],
        success: true,
      });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let e in error.errors) {
          errorList.push(e.message);
        }
        return NextResponse.json({ msg: errorList })
      }
      else {
        return NextResponse.json(error)
      }
    }
  }
