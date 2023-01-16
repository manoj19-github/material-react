import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2} mt={5}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2} mt={5}>
        <TextField
          label="Small"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField label="Name" variant="filled" required />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="standard"
          helperText="Do not share your password to anyone"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="start"
                onClick={() => setShowPassword((prev: boolean) => !prev)}
                sx={{ cursor: "pointer" }}
              >
                {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="standard"
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={2} mt={5}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2} mt={5}>
        <TextField label="Qualification" error variant="filled" />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
