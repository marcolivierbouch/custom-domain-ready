import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/(.*)'],
};

export async function middleware(req: Request) {
  if (!process.env.EDGE_CONFIG) {
    return NextResponse.next();
  }

  try {
    const urlWithoutProtocol = req.url.replace(/^https?:\/\//, '');
    const key = urlWithoutProtocol.replace(/\./g, '_').replace(/\//g, '-');

    const destination = await get(key);

    if (destination) {
      const destinationURL = new URL(destination.toString());
      destinationURL.search = new URL(req.url).search;
      return NextResponse.rewrite(destinationURL);
    }
  } catch {
    return NextResponse.next();
  }

  return NextResponse.next();
}
