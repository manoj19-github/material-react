import React, { useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";

type Skill = {
  id: number;
  label: string;
};

const MuiAutoComplete = () => {
  const skills = [
    "spring boot",
    "django",
    "react",
    "express",
    "nextjs",
    "docker",
  ];
  const skillOption = skills.map((self, index) => ({
    id: index + 1,
    label: self,
  }));
  const [value, setValue] = useState<string | null>(null);
  const [mySkills, setMySkills] = useState<Skill | null>(null);
  console.log("value autocomplete : ", value);
  console.log("authcomplete skills: ", mySkills);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillOption}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={mySkills}
        onChange={(event: any, newValue: Skill | null) => setMySkills(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
