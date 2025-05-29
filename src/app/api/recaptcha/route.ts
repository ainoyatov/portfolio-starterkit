import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { captcha } = await request.json();
    const secret = process.env.RECAPTCHA_SECRET;

    // Verify with Google reCAPTCHA
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secret}&response=${captcha}`
    });

    const response = await verifyRes.json();

    if (response.success) {
        // CAPTCHA passed
        return NextResponse.json({ success: true, message: "reCAPTCHA verified." });
    } else {
        // CAPTCHA failed
        return NextResponse.json({ success: false, message: "reCAPTCHA verification failed.", error: response });
    }
}