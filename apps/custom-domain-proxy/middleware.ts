import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/(.*)'],
};

export async function middleware(req: Request) {
  console.log(req.url);

  const urlWithoutProtocol = req.url.replace(/^https?:\/\//, '');
  const key = urlWithoutProtocol.replace(/\./g, '_').replace(/\//g, '-');

  const destination = await get(key);
  console.log(destination)

  if (destination) {
    const destinationURL = new URL(destination?.toString() || '');
    destinationURL.search = new URL(req.url).search; // Preserve query params
    return NextResponse.rewrite(destinationURL);
  }

  return new NextResponse('Not Found', { status: 404 });
}
