import { muiTheme } from "@/styles/muiTheme";
import React, { PropsWithChildren } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/system";
import { getEnv } from "@/utils/env";

const LayoutCore: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Auth0Provider
      domain={getEnv().auth0Domain}
      clientId={getEnv().auth0ClientId}
      authorizationParams={{
        redirect_uri: getEnv().appEndpoint,
        audience: "https://dev-s5j0v1hbqz1cuogg.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata profile",
      }}
    >
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </Auth0Provider>
  );
};

export default LayoutCore;
