import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
    matcher: ['/(.*)'],
};

export async function middleware(req: Request) {
    const url = new URL(req.url);
    const path = url.pathname;
    const queryParams = url.search; // Capture query parameters

    console.log(req.url)

    const destination = await get(req.url)
    const destinationURL = new URL(destination?.toString() || '')

    NextResponse.rewrite(destinationURL)
}