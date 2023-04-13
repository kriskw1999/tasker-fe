import React from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const SignupCTA: React.FC = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <Button
      variant="outlined"
      color="info"
      className="rounded-xl w-255 font-bold mb-2"
      fullWidth
      onClick={() => {
        loginWithPopup({
          authorizationParams: {
            screen_hint: "signup",
          },
        });
      }}
    >
      Sign-up
    </Button>
  );
};

export default SignupCTA;
