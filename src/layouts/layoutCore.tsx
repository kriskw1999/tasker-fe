import { muiTheme } from "@/styles/muiTheme";
import React, { PropsWithChildren } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/system";
import { getEnv } from "@/utils/env";

const LayoutCore: React.FC<PropsWithChildren> = ({ children }) => {
  const { auth0Domain, auth0ClientId, appEndpoint } = getEnv();

  return (
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{
        redirect_uri: appEndpoint,
        audience: "https://dev-s5j0v1hbqz1cuogg.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata profile",
      }}
    >
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </Auth0Provider>
  );
};

export default LayoutCore;
