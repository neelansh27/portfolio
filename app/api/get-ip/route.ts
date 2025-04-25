// app/api/get-ip/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const forwarded = request.headers.get('x-forwarded-for') ?? '';
    const ip = forwarded.split(',')[0].trim() || null;
    return NextResponse.json({ ip });
}
