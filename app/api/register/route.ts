import { NextRequest, NextResponse } from "next/server";
import z, { email } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error, {
      status: 400,
    });
  };

  const user = await prisma?.user.findUnique({
    where: { email: body.email }
  })

  if (user) {
    return NextResponse.json({ error: "User already exists"}, {status: 400})
  }

  const hashedPassword = await bcrypt.hash(body.password, 12);

  const newUser = prisma?.user.create({
    data: {
        email: body.email,
        hashedPassword
    }
  })

  return NextResponse.json({ email: body.email })
}
