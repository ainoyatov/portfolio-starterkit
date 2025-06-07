import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { full_name, email, phone, message } = body;

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <info@gravityelements.com>',
      to: ['akmal.inoyatov@gmail.com'],
      subject: 'Dev Portfolio Contact Form',
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, message: 'There was a problem sending your message.' }, { status: 500 });
  }
}