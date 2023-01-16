import React, { useState } from "react";
import { Box, Switch, FormControlLabel } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  console.log("checked : ", checked);
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiSwitch;
