import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  naam: z.string().min(2, "Vul je naam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  telefoon: z.string().min(8, "Vul je telefoonnummer in"),
  situatie: z.string().optional(),
  wanneerStarten: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { success: false, message: "E-mail is nog niet geconfigureerd." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const contactEmail = process.env.CONTACT_EMAIL ?? "dylan@calvora.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "ZZP Timmerman <onboarding@resend.dev>";

    const { data: sendResult, error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: data.email,
      subject: `Nieuwe aanvraag: ${data.naam}`,
      html: `
        <h2>Nieuwe kennismakingsaanvraag</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;font-weight:bold;">Naam</td><td style="padding:8px 12px;">${data.naam}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Email</td><td style="padding:8px 12px;">${data.email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Telefoon</td><td style="padding:8px 12px;">${data.telefoon}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Situatie</td><td style="padding:8px 12px;">${data.situatie || "-"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;">Wanneer starten</td><td style="padding:8px 12px;">${data.wanneerStarten || "-"}</td></tr>
        </table>
      `,
    });

    if (sendError) {
      console.error("Resend send error:", sendError);
      return NextResponse.json(
        { success: false, message: "E-mail versturen mislukt. Probeer opnieuw." },
        { status: 502 }
      );
    }

    if (!sendResult?.id) {
      console.error("Resend did not return an id:", sendResult);
      return NextResponse.json(
        { success: false, message: "E-mail versturen mislukt. Probeer opnieuw." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
