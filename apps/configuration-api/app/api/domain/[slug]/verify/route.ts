import {
  getConfigResponse,
  getDomainResponse,
  verifyDomain,
} from '@customdomainready/sdk';
import { NextResponse } from 'next/server';

export type DomainVerificationStatusProps =
  | 'Valid Configuration'
  | 'Invalid Configuration'
  | 'Pending Verification'
  | 'Domain Not Found'
  | 'Unknown Error';

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const domain = decodeURIComponent(params.slug);

  let status: DomainVerificationStatusProps = 'Valid Configuration';

  const [domainJson, configJson] = await Promise.all([
    getDomainResponse(
      domain,
      process.env.VERCEL_PROJECT_ID!,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    ),
    getConfigResponse(
      domain,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    ),
  ]);

  if (domainJson?.error?.code === 'not_found') {
    // domain not found on Vercel project
    status = 'Domain Not Found';

    // unknown error
  } else if (domainJson.error) {
    status = 'Unknown Error';

    // if domain is not verified, we try to verify now
  } else if (!domainJson.verified) {
    status = 'Pending Verification';
    const verificationJson = await verifyDomain(
      domain,
      process.env.VERCEL_PROJECT_ID!,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    );

    // domain was just verified
    if (verificationJson && verificationJson.verified) {
      status = 'Valid Configuration';
    }
  } else if (configJson.misconfigured) {
    status = 'Invalid Configuration';
  } else {
    status = 'Valid Configuration';
  }

  return NextResponse.json({
    status,
    domainJson,
  });
}
