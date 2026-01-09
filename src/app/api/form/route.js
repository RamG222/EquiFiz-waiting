import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { email, phone } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // 💾 Save to database
    const query = `
      INSERT INTO waitlist (email, phone, created_at) 
      VALUES ($1, $2, NOW()) 
      RETURNING id, email, phone, created_at
    `;
    const dbResult = await pool.query(query, [email, phone || null]);

    // 📧 Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true, // SSL (required for 465)
      auth: {
        user: process.env.EMAIL_USER || "founders@equifiz.com",
        pass: process.env.EMAIL_PASS || "$Hivraj11",
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
        <p><strong>Database ID:</strong> ${dbResult.rows[0].id}</p>
      `,
    };

    // 📤 Send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Signup successful",
        data: dbResult.rows[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
