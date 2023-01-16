import React from "react";
import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> this is h1 heading </Typography>
      <Typography variant="h2" gutterBottom>
        {" "}
        this is h2 heading{" "}
      </Typography>
      <Typography variant="h3"> this is h3 heading </Typography>
      <Typography variant="h4"> this is h4 heading </Typography>
      <Typography variant="h5"> this is h5 heading </Typography>
      <Typography variant="h6"> this is h6 heading </Typography>
      <Typography variant="subtitle1"> this is subtitle 1 heading </Typography>
      <Typography variant="subtitle2"> this is subtitle 2 heading </Typography>
      <Typography variant="body1"> this is body 1 heading </Typography>
      <Typography variant="body2"> this is body 2 heading </Typography>
    </div>
  );
};

export default MuiTypography;
