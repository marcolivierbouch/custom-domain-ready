
import { addDomainToEdgeConfig, getEdgeconfigItem, updateEdgeConfigItem } from "@customdomainready/sdk";
import { z } from "zod";

const customDomainSchema = z.object({
    domain: z.string(),
    slug: z.string(),
    destination: z.string()
})

export async function PATCH(
    req: Request
) {
    try {
        const body = await req.json()
        const payload = customDomainSchema.parse(body)

        const sourceURL = new URL(payload.domain, payload.slug)
        
        // validate if key already exist and if yes update it instead of creating
        const existingDomain = await getEdgeconfigItem(sourceURL.toString(), process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!, process.env.VERCEL_TEAM_ID, process.env.AUTH_BEARER_TOKEN)
        console.log(existingDomain)

        if (existingDomain){
            const updateResponse = await updateEdgeConfigItem(sourceURL.toString(), payload.destination, process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!, process.env.VERCEL_TEAM_ID, process.env.AUTH_BEARER_TOKEN)
            console.log(updateResponse)
        } else {
            const createResponse = await addDomainToEdgeConfig(sourceURL.toString(), payload.destination, process.env.VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID!, process.env.VERCEL_TEAM_ID, process.env.AUTH_BEARER_TOKEN)
            console.log(createResponse)
        }

        return new Response('created', { status: 201})
    } catch (error) {
        console.log(error)
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}