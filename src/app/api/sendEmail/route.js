import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();

    // console.log(body)

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `Message From ${body.firstName} ${body.lastName}`,
      text: body.message + " | Sent from: " + body.email,
      html: `
                <div>First Name : ${body.firstName} </div>
                <div>Last Name :${body.lastName} </div>
                <div>Email :${body.email} </div>
                <div>Company :${body.company} </div>
                <div>Country :${body.country} </div>
                <div>Message : </div>
                <div>${body.inquiry}</div>
            `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({ success: true, message: "success" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
}