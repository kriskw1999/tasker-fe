import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ProfileInfo from "@/components/ProfileInfo";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddTaskTableModal from "@/components/AddTaskTableModal";

const Header = () => {
  const [showAddTaskTableModal, setShowAddTaskTableModal] =
    React.useState(false);

  return (
    <div className="px-10 py-8 bg-primary flex flex-row justify-between">
      <div className="flex flex-row items-center gap-1 text-white text-3xl">
        <CheckBoxOutlinedIcon className="text-3xl" />
        <h1>Tasker</h1>
      </div>

      <div className="flex gap-1 items-center">
        <AddCircleOutlineIcon
          className="text-white text-3xl cursor-pointer"
          onClick={() => {
            setShowAddTaskTableModal(true);
          }}
        />
        <ProfileInfo />
      </div>

      {/* MODAL TO ADD NEW BOARDS */}
      <AddTaskTableModal
        open={showAddTaskTableModal}
        setOpen={setShowAddTaskTableModal}
      />
    </div>
  );
};

export default Header;
