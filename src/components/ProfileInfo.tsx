import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, CircularProgress, Popover } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { getEnv } from "@/utils/env";

const ProfileInfo = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) {
    return <CircularProgress className="text-white" />;
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-white">{user.email}</p>

        <div className="bg-white rounded-full p-1">
          <img
            className="rounded-full h-10 w-10 cursor-pointer"
            src={user.picture}
            alt={user.name}
            onClick={onImageClick}
          />
        </div>

        <Popover
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <div className="bg-white cursor-pointer px-5 py-5 rounded-md flex items-center gap-2">
            <Button
              onClick={() => {
                handleClose();
                logout({
                  logoutParams: { returnTo: `${getEnv().appEndpoint}home` },
                });
              }}
              variant="outlined"
            >
              <PersonIcon />
              <p>Logout</p>
            </Button>
          </div>
        </Popover>
      </div>
    );
  } else {
    return (
      <div
        className="text-white cursor-pointer"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </div>
    );
  }
};

export default ProfileInfo;
