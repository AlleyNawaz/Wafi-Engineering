"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
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
  const validated = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validated.data;

  try {
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("SMTP env vars missing");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Wafi Engineering" <gethelp.wafiengineering@gmail.com>`,

      // ✅ USER gets the email
      to: email,

      // ✅ You can reply directly to the user
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

    console.log("✅ Email sent to user + CC to admin");

    return { success: true };
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    return {
      errors: {
        _form: [
          "Email service is temporarily unavailable. Please try again later.",
        ],
      },
    };
  }
}
