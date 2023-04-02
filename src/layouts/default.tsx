import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/system";
import { muiTheme } from "@/styles/muiTheme";
import { Auth0Provider } from "@auth0/auth0-react";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-s5j0v1hbqz1cuogg.us.auth0.com"
      clientId="Sj2kuwG94raw6LeGmL3J3eDKgprag9oe"
      authorizationParams={{
        redirect_uri: "http://localhost:3000",
      }}
    >
      <ThemeProvider theme={muiTheme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default DefaultLayout;
