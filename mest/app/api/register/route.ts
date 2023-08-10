import bcrypt from "bcrypt";
import prisma from "~/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !name || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:9 ~ POST ~ reg error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
