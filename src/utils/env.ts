export const getEnv = () => {
  return {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    appEndpoint: process.env.NEXT_PUBLIC_APP_ENDPOINTk!,
    auth0Domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
    auth0ClientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
  };
};
