"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
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
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Mock Email Sending Logic
  // In a real application, you would configure the transporter with valid SMTP credentials.
  // We'll log the email to the console to simulate sending.

  try {
    // Determine transport configuration
    // If environment variables are set, use them. Otherwise, log to console.
    const hasSmtp =
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (hasSmtp) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from:
          process.env.SMTP_FROM ||
          '"Wafi Engineering Website" <no-reply@wafiengineering.com>', // sender address
        to: "AliPythonDev@gmail.com", // list of receivers
        subject: `New Contact Form Submission: ${subject}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`, // plain text body
        html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `, // html body
      });

      console.log("Email sent successfully via SMTP to AliPythonDev@gmail.com");
    } else {
      // Fallback simulation
      console.log("==================================================");
      console.log("SIMULATING EMAIL SEND - SMTP CREDENTIALS MISSING");
      console.log(`To: AliPythonDev@gmail.com`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("==================================================");

      // Human-readable delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      errors: {
        _form: ["Failed to send email. Please try again later."],
      },
    };
  }
}
