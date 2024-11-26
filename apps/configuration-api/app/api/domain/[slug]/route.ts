import {
    removeDomainFromVercelProject,
} from "@customdomainready/sdk";

export async function DELETE(
    req: Request,
    { params }: { params: { slug: string } },
) {
    const domain = decodeURIComponent(params.slug);
    const response = await removeDomainFromVercelProject(domain, process.env.VERCEL_PROJECT_ID!, process.env.VERCEL_TEAM_ID, process.env.AUTH_BEARER_TOKEN);

    if (response.error) {
        return new Response(response.error.message, { status: 400 })
    }

    return new Response(null, { status: 204 })
}