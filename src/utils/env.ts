export const getEnv = () => {
  return {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    appEndpoint: process.env.APP_ENDPOINTk!,
    auth0Domain: process.env.AUTH0_DOMAIN!,
    auth0ClientId: process.env.AUTH0_CLIENT_ID!,
  };
};
