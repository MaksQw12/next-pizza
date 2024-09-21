import { prisma } from '@/prisma/prisma-client';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(Req: NextRequest) {
  const data = await Req.json();

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json(user);
}
