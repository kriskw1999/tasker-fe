import { TextField } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import React from "react";

type EditLabelRowProps = {
  initialValue: string;
  onSave: (label: string) => void;
  onCancel: () => void;
};

const EditLabelRow: React.FC<EditLabelRowProps> = ({
  initialValue,
  onSave,
  onCancel,
}) => {
  const [value, setValue] = React.useState<string>(initialValue);

  return (
    <div className="flex items-center gap-1">
      <TextField
        autoFocus
        size="small"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSave(value);
          } else if (e.key === "Escape") {
            onCancel();
          }
        }}
      />
      <CheckCircleOutlineRoundedIcon
        className="cursor-pointer text-success"
        onClick={() => {
          onSave(value);
        }}
      />
      <HighlightOffRoundedIcon
        className="cursor-pointer text-error"
        onClick={() => {
          onCancel();
        }}
      />
    </div>
  );
};

export default EditLabelRow;
