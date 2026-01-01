"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function sendEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1️⃣ Validate input
  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    // 2️⃣ Ensure SMTP config exists
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("SMTP environment variables are missing");
    }

    // 3️⃣ Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 4️⃣ Verify SMTP connection (important)
    await transporter.verify();

    // 5️⃣ Send email
    await transporter.sendMail({
      from: `"Wafi Engineering" <${process.env.SMTP_USER}>`,

      // ✅ Email goes to the user
      to: email,

      // ✅ You receive a copy
      cc: "info@WafiEngineering.com",

      // ✅ Reply goes to the user
      replyTo: email,

      subject: `We received your message: ${subject}`,

      text: `
Hello ${name},

Thank you for contacting Wafi Engineering.
We have received your message and will get back to you shortly.

------------------------
Your Message:
${message}
------------------------

Best regards,
Wafi Engineering Team
      `,

      html: `
        <p>Hello <strong>${name}</strong>,</p>

        <p>Thank you for contacting <strong>Wafi Engineering</strong>.
        We have received your message and will get back to you shortly.</p>

        <hr />

        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>

        <br />
        <p>Best regards,<br />
        <strong>Wafi Engineering Team</strong></p>
      `,
    });

    console.log("✅ Email sent successfully");

    return { success: true };
  } catch (error) {
    console.error("❌ Email error:", error);

    return {
      errors: {
        _form: [
          "Email service is temporarily unavailable. Please try again later.",
        ],
      },
    };
  }
}
