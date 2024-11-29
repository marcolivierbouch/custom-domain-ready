import { addDomainToVercel, getDomains } from '@customdomainready/sdk';
import { NextResponse } from 'next/server';

import * as z from 'zod';

const customDomainSchema = z.object({
  domain: z.string(),
});

export async function POST(req: Request) {
  try {
    // Get the request body and validate it.
    const body = await req.json();
    const payload = customDomainSchema.parse(body);

    const domain = payload.domain;

    // Check if the domain already exists
    const existingDomains = await getDomains(
      process.env.VERCEL_PROJECT_ID!,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    );
    if (existingDomains.domains.some((d: any) => d.name === domain)) {
      return NextResponse.json('Domain already exists', { status: 200 });
    }

    const response = await addDomainToVercel(
      domain,
      process.env.VERCEL_PROJECT_ID!,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    );

    if (response.error) {
      return NextResponse.json(response.error.message, { status: 400 });
    }

    return NextResponse.json({
      response,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json('Internal Server Error', { status: 500 });
  }
}
