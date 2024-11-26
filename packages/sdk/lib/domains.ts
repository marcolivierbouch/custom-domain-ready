import {
  DomainResponse,
  DomainConfigResponse,
  DomainVerificationResponse,
} from '../types';

export const getDomains = async (
  projectIdVercel: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v9/projects/${projectIdVercel}/domains${
      teamIdVercel ? `?teamId=${teamIdVercel}` : ''
    }`,
    {
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
      },
    },
  ).then(res => res.json());
};

export const addDomainToVercel = async (
  domain: string,
  projectIdVercel: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v10/projects/${projectIdVercel}/domains${
      teamIdVercel ? `?teamId=${teamIdVercel}` : ''
    }`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: domain,
      }),
    },
  ).then(res => res.json());
};

export const removeDomainFromVercelProject = async (
  domain: string,
  projectIdVercel: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v9/projects/${projectIdVercel}/domains/${domain}${
      teamIdVercel ? `?teamId=${teamIdVercel}` : ''
    }`,
    {
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
      },
      method: 'DELETE',
    },
  ).then(res => res.json());
};

export const removeDomainFromVercelTeam = async (
  domain: string,
  teamIdVercel?: string,
  authBearerToken?: string,
) => {
  return await fetch(
    `https://api.vercel.com/v6/domains/${domain}${
      teamIdVercel ? `?teamId=${teamIdVercel}` : ''
    }`,
    {
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
      },
      method: 'DELETE',
    },
  ).then(res => res.json());
};

export const getDomainResponse = async (
  domain: string,
  projectIdVercel: string,
  teamIdVercel?: string,
  authBearerToken?: string,
): Promise<DomainResponse & { error: { code: string; message: string } }> => {
  return await fetch(
    `https://api.vercel.com/v9/projects/${projectIdVercel}/domains/${domain}${
      teamIdVercel ? `?teamId=${teamIdVercel}` : ''
    }`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
    },
  ).then(res => {
    return res.json();
  });
};

export const getConfigResponse = async (
  domain: string,
  teamIdVercel?: string,
  authBearerToken?: string,
): Promise<DomainConfigResponse> => {
  return await fetch(
    `https://api.vercel.com/v6/domains/${domain}/config${
      teamIdVercel ? `?teamId=${teamIdVercel}` : ''
    }`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
    },
  ).then(res => res.json());
};

export const verifyDomain = async (
  domain: string,
  projectIdVercel: string,
  teamIdVercel?: string,
  authBearerToken?: string,
): Promise<DomainVerificationResponse> => {
  return await fetch(
    `https://api.vercel.com/v9/projects/${projectIdVercel}/domains/${domain}/verify${
      teamIdVercel ? `?teamId=${teamIdVercel}` : ''
    }`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authBearerToken}`,
        'Content-Type': 'application/json',
      },
    },
  ).then(res => res.json());
};

export const getSubdomain = (name: string, apexName: string) => {
  if (name === apexName) return null;
  return name.slice(0, name.length - apexName.length - 1);
};

export const getApexDomain = (url: string) => {
  let domain;
  try {
    domain = new URL(url).hostname;
  } catch (e) {
    return '';
  }
  const parts = domain.split('.');
  if (parts.length > 2) {
    return parts.slice(-2).join('.');
  }
  return domain;
};

export const validDomainRegex = new RegExp(
  /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
);
