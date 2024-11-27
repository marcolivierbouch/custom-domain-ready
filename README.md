``` 
$$$$$$\                        $$\                                   $$$$$$$\                                    $$\                 $$$$$$$\                            $$\           
$$  __$$\                       $$ |                                  $$  __$$\                                   \__|                $$  __$$\                           $$ |          
$$ /  \__|$$\   $$\  $$$$$$$\ $$$$$$\    $$$$$$\  $$$$$$\$$$$\        $$ |  $$ | $$$$$$\   $$$$$$\  $$$$$$\$$$$\  $$\ $$$$$$$\        $$ |  $$ | $$$$$$\   $$$$$$\   $$$$$$$ |$$\   $$\ 
$$ |      $$ |  $$ |$$  _____|\_$$  _|  $$  __$$\ $$  _$$  _$$\       $$ |  $$ |$$  __$$\  \____$$\ $$  _$$  _$$\ $$ |$$  __$$\       $$$$$$$  |$$  __$$\  \____$$\ $$  __$$ |$$ |  $$ |
$$ |      $$ |  $$ |\$$$$$$\    $$ |    $$ /  $$ |$$ / $$ / $$ |      $$ |  $$ |$$ /  $$ | $$$$$$$ |$$ / $$ / $$ |$$ |$$ |  $$ |      $$  __$$< $$$$$$$$ | $$$$$$$ |$$ /  $$ |$$ |  $$ |
$$ |  $$\ $$ |  $$ | \____$$\   $$ |$$\ $$ |  $$ |$$ | $$ | $$ |      $$ |  $$ |$$ |  $$ |$$  __$$ |$$ | $$ | $$ |$$ |$$ |  $$ |      $$ |  $$ |$$   ____|$$  __$$ |$$ |  $$ |$$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |  \$$$$  |\$$$$$$  |$$ | $$ | $$ |      $$$$$$$  |\$$$$$$  |\$$$$$$$ |$$ | $$ | $$ |$$ |$$ |  $$ |      $$ |  $$ |\$$$$$$$\ \$$$$$$$ |\$$$$$$$ |\$$$$$$$ |
 \______/  \______/ \_______/    \____/  \______/ \__| \__| \__|      \_______/  \______/  \_______|\__| \__| \__|\__|\__|  \__|      \__|  \__| \_______| \_______| \_______| \____$$ |
                                                                                                                                                                              $$\   $$ |
                                                                                                                                                                              \$$$$$$  |
                                                                                                                                                                               \______/ 
```

# Custom Domain Ready

Custom domains are a very valuable feature for enterprise clients in the Saas world. This project will help you add custom domain to your enterprise SaaS using a Vercel Proxy and a basic frontend to manage the API.

This solution is pefect for adding a custom domain on a js file or any type of files that your clients need to import in their website.

## How to configure Next.JS custom domain proxy deployed in Vercel

For this tutorial you'll need a [Vercel](https://vercel.com/) account.

1. Create a new storage [Edge Config](https://vercel.com/docs/storage/edge-config).
2. Create a new vercel project and import configuration-api.
![image](https://github.com/user-attachments/assets/a32e8dcc-3f23-4890-b887-4a94d8bbbc93)

4. Create a new project and import custom-domain-proxy.
![image](https://github.com/user-attachments/assets/f7d07dd7-009e-49a3-a3ec-5a6726e422ae)

5. Connect the storage to the project custom-domain-proxy.
![image](https://github.com/user-attachments/assets/afd55de4-6e2e-412e-898f-a8c8ea05503f)

7. Add the required env vars for the configuration-api

```bash
VERCEL_CUSTOM_DOMAIN_PROXY_EDGE_CONFIG_ID= # You can find the edge config id when you click on the storage
VERCEL_TEAM_ID=    # Your vercel team id
VERCEL_PROJECT_ID= # must be the project id of the custom-domain-proxy because this is on this project that we want to add domains
AUTH_BEARER_TOKEN= # create your own bearer token that can access the projects
```

6. Add a new domain using the configuration-api using the deployed project.
7. Finish the domain configuration.
8. Use the proxy with the new domain and slug you added.
