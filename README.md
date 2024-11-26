# Custom Domain Ready

Custom domains are a very valuable feature for enterprise clients in the Saas world. This project will help you add custom domain to your enterprise SaaS using a Vercel Proxy and a basic frontend to manage the API.

## How to configure Next.JS custom domain proxy deployed in Vercel

For this tutorial you'll need a [Vercel](https://vercel.com/) account.

1. Create a new storage edge config.
2. Create a new vercel project and import configuration-api.
3. Create a new project and import custom-domain-proxy.
4. Connect the storage to the project custom-domain-proxy. 
5. Add the required env vars for the configuration-api

```bash
VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID= # You can find the edge config id when you click on the storage
VERCEL_TEAM_ID=    # Your vercel team id
VERCEL_PROJECT_ID= # must be the project id of the custom-domain-proxy because this is on this project that we want to add domains
AUTH_BEARER_TOKEN= # create your own bearer token that can access the projects
```

6. Add a new domain using the configuration-api
7. Finish the domain configuration