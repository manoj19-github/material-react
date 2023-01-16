import { useState, useCallback } from "react";

import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
const MuiButtons = () => {
  const [formats, setFormats] = useState<string[]>([]);

  console.log("formats : ", formats);
  const changeFormats = useCallback(
    (updateFormats: string[]) => setFormats(updateFormats),
    []
  );
  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    updateFormats: string[]
  ) => {
    changeFormats(updateFormats);
  };

  return (
    <Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text">Primary Button</Button>
        <Button variant="outlined">Outline Button</Button>
        <Button
          variant="contained"
          href="https://santra-manoj-portfolio.vercel.app/"
        >
          contained Button
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" mt={2}>
        <Button variant="contained" color="primary">
          {" "}
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          {" "}
          secondary Button
        </Button>
        <Button variant="contained" color="info">
          {" "}
          info Button
        </Button>
        <Button variant="contained" color="error">
          {" "}
          error Button
        </Button>
        <Button variant="contained" color="warning">
          {" "}
          warning Button
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row" mt={2}>
        <Button variant="contained" size="small">
          Small Button
        </Button>
        <Button variant="contained" size="medium">
          Medium Button
        </Button>
        <Button variant="contained" size="large">
          Large Button
        </Button>
        {/* disable elevation */}
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>
          send
        </Button>
        {/* disable ripple */}
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("hello manoj good morning")}
        >
          send
        </Button>
        <IconButton aria-label="send" color="success">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" size="small" color="success">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButtons;
