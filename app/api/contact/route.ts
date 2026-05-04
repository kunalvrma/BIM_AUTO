import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().optional(),
  description: z.string().min(20, "Please describe your project in at least 20 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { name, company, email, projectType, description } = parsed.data;

    // Only attempt Resend if API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "hello@bimautomation.consulting";

    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "BIM Automation Website <noreply@bimautomation.consulting>",
        to: [toEmail],
        reply_to: email,
        subject: `New enquiry from ${company} — ${projectType || "General"}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0E0E1A; color: #E2E8F0; padding: 32px; border-radius: 12px; border: 1px solid #1C1C2E;">
            <h2 style="color: #F97316; font-size: 20px; margin-bottom: 24px; margin-top: 0;">
              New BIM Automation Enquiry
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; color: #475569; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-size: 13px;">Company</td>
                <td style="padding: 8px 0; font-weight: 600;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-size: 13px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #F97316;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-size: 13px;">Service</td>
                <td style="padding: 8px 0;">${projectType || "Not specified"}</td>
              </tr>
            </table>

            <div style="background: #13131F; border: 1px solid #1C1C2E; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="color: #475569; font-size: 12px; margin-top: 0; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.1em;">Project Description</p>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${description}</p>
            </div>

            <a href="mailto:${email}" style="display: inline-block; background: #F97316; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Reply to ${name}
            </a>
          </div>
        `,
      });

      // Send auto-reply to the enquirer
      await resend.emails.send({
        from: "Kunal Verma <hello@bimautomation.consulting>",
        to: [email],
        subject: "We received your automation enquiry",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0E0E1A; color: #E2E8F0; padding: 32px; border-radius: 12px; border: 1px solid #1C1C2E;">
            <h2 style="color: #F97316; margin-top: 0;">Thanks, ${name}.</h2>
            <p>I received your enquiry from ${company} and will review your workflow details today.</p>
            <p>You'll hear from me within 1 business day with either a direct reply or a short set of clarifying questions to prepare the audit.</p>
            <p style="color: #475569; font-size: 14px; margin-bottom: 0;">
              — Kunal<br/>
              BIM Automation Consulting
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
