import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, phone } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // 📧 Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true, // SSL (required for 465)
      auth: {
        user: "founders@equifiz.com",
        pass: "$Hivraj11",
      },
    });

    // ✉️ Email content
    const mailOptions = {
      from: `"Equifiz Waitlist" <founders@equifiz.com>`,
      to: "contact@equifiz.com",
      subject: "New Waitlist Signup 🚀",
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      `,
    };

    // 📤 Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
