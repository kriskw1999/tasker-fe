import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";

const LoginCTA: React.FC = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <Button
      className="bg-neutral hover:bg-neutral font-bold mb-6 rounded-xl w-255"
      fullWidth
      onClick={() => {
        loginWithPopup({
          authorizationParams: { redirect_uri: "http://localhost:3000" },
        });
      }}
    >
      Sign-in
    </Button>
  );
};

export default LoginCTA;
