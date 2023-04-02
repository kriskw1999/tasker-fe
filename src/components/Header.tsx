import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ProfileInfo from "@/components/ProfileInfo";
import React from "react";

const Header = () => {
  return (
    <div className="px-10 py-8 bg-primary flex flex-row justify-between">
      <div className="flex flex-row items-center gap-1 text-white text-3xl">
        <CheckBoxOutlinedIcon className="text-3xl" />
        <h1>Tasker</h1>
      </div>

      <ProfileInfo />
    </div>
  );
};

export default Header;
