import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React, { useState } from "react";
const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index: number = skills.indexOf(e.target.value);
    if (index < 0) {
      setSkills((prev: string[]) => [...prev, e.target.value]);
    } else {
      setSkills((prev: string[]) =>
        prev.filter((self: string) => self !== e.target.value)
      );
    }
  };
  //   console.log("acceptTnc", acceptTnc);
  console.log("skills : ", skills);

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I Accept terms and conditions"
          control={
            <Checkbox
              checked={acceptTnc}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAcceptTnc(e.target.checked)
              }
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAcceptTnc(e.target.checked)
          }
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Sprint Boot"
              control={
                <Checkbox
                  checked={skills.includes("Spring Boot")}
                  value="Spring Boot"
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Django"
              control={
                <Checkbox
                  checked={skills.includes("Django")}
                  value="Django"
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Nodejs"
              control={
                <Checkbox
                  checked={skills.includes("Nodejs")}
                  value="Nodejs"
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
