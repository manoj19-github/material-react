import { useState } from "react";
import {
  Radio,
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
const MuiRadio = () => {
  const [experience, setExperience] = useState<string>("");
  console.log("====================================");
  console.log("experience : ", experience);
  console.log("====================================");
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Year's of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={experience}
          row
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setExperience(e.target.value)
          }
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
