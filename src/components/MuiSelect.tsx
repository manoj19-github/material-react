import React, { useState } from "react";
import { Box, Select, TextField, MenuItem } from "@mui/material";
const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log("country : ", country);

  return (
    <Box width="250px" mt={10}>
      <TextField
        label="Select country"
        fullWidth
        select
        SelectProps={{
          multiple: true,
        }}
        value={country}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setCountry(typeof value === "string" ? value.split(",") : value);
        }}
      >
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="as">Australiya</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="Ca">Canada</MenuItem>
        <MenuItem value="Ja">Japan</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
