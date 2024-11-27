import {
  addDomainToEdgeConfig,
  getEdgeconfigItem,
  updateEdgeConfigItem,
  removeDomainFromEdgeConfig,
  getAllItemsFromEdgeConfig,
} from '@customdomainready/sdk';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const customDomainSchema = z.object({
  domain: z.string(),
  slug: z.string(),
  destination: z.string(),
});

export async function GET(req: Request) {
  try {
    const response = await getAllItemsFromEdgeConfig(
      process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    );
    console.log(response);
    return NextResponse.json({
      response: response.map((item: any) => ({
        id: item.key,
        sourceDomain: `https://${item.key.split('-')[0].replace(/_/g, '.')}`,
        slug: item.key.split('-').slice(1).join('/').replace(/_/g, '.'),
        destinationPath: item.value,
      })),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json('Internal Server Error', { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const payload = customDomainSchema.parse(body);

    const domainWithoutProtocol = payload.domain.replace(/^https?:\/\//, '');
    const key = `${domainWithoutProtocol.replace(
      /\./g,
      '_',
    )}${payload.slug.replace(/\//g, '-')}`;

    // validate if key already exist and if yes update it instead of creating
    const existingDomain = await getEdgeconfigItem(
      key,
      process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    );

    if (existingDomain) {
      const updateResponse = await updateEdgeConfigItem(
        key,
        payload.destination,
        process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!,
        process.env.VERCEL_TEAM_ID,
        process.env.AUTH_BEARER_TOKEN,
      );
      console.log(updateResponse);
    } else {
      const createResponse = await addDomainToEdgeConfig(
        key,
        payload.destination,
        process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!,
        process.env.VERCEL_TEAM_ID,
        process.env.AUTH_BEARER_TOKEN,
      );
      console.log(createResponse);
    }

    return NextResponse.json('created', { status: 201 });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(JSON.stringify(error.issues), { status: 422 });
    }

    return NextResponse.json(null, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const payload = customDomainSchema.parse(body);

    const domainWithoutProtocol = payload.domain.replace(/^https?:\/\//, '');
    const key = `${domainWithoutProtocol.replace(
      /\./g,
      '_',
    )}${payload.slug.replace(/\//g, '-')}`;

    const existingDomain = await getEdgeconfigItem(
      key,
      process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!,
      process.env.VERCEL_TEAM_ID,
      process.env.AUTH_BEARER_TOKEN,
    );

    if (existingDomain) {
      const deleteResponse = await removeDomainFromEdgeConfig(
        key,
        process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!,
        process.env.VERCEL_TEAM_ID,
        process.env.AUTH_BEARER_TOKEN,
      );
      console.log(deleteResponse);
      return NextResponse.json('deleted', { status: 204 });
    } else {
      return NextResponse.json('Domain not found', { status: 404 });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(JSON.stringify(error.issues), { status: 422 });
    }

    return NextResponse.json(null, { status: 500 });
  }
}
