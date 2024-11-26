export const updateEdgeConfigItem = async (
  key: string,
  value: string,
  edgeConfigName: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigName}/items?edgeConfigId=${edgeConfigName}&teamId=${teamIdVercel}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'update',
            key: key,
            value: value,
          },
        ],
      }),
    },
  ).then(res => res.json());
};

export const getEdgeconfigItem = async (
  key: string,
  edgeConfigName: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigName}/item/${key}?teamId=${teamIdVercel}`,
    {
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
      },
    },
  ).then(res => (res.body === null ? null : res.json()));
};

export const addDomainToEdgeConfig = async (
  chatbotId: string,
  domain: string,
  edgeConfigName: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigName}/items?edgeConfigId=${edgeConfigName}&teamId=${teamIdVercel}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'create',
            key: chatbotId,
            value: domain,
          },
        ],
      }),
    },
  ).then(res => res.json());
};

export const removeDomainFromEdgeConfig = async (
  key: string,
  edgeConfigName: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigName}/items?edgeConfigId=${edgeConfigName}&teamId=${teamIdVercel}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'delete',
            key: key,
          },
        ],
      }),
    },
  ).then(res => res.json());
};

export const getAllItemsFromEdgeConfig = async (
  edgeConfigName: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v1/edge-config/${edgeConfigName}/items?edgeConfigId=${edgeConfigName}&teamId=${teamIdVercel}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
    },
  ).then(res => res.json());
};
