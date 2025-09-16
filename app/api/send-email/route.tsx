import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    resend.emails.send({
        from: 'example@your-domain.com',
        to: "random-email@gmail.com",
        subject: "RANDOM SUBJECT",
        react: <WelcomeTemplate name="John" />
    })

    return NextResponse.json({});
}