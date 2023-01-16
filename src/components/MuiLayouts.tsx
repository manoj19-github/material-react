import React from "react";
import { Box, Stack, Divider, Grid } from "@mui/material";
const MuiLayouts = () => {
  return (
    <>
      <Stack
        direction="row"
        mt={10}
        spacing={2}
        sx={{ border: "1px solid gray" }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          mt={5}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "100px",
            height: "100px",
            "&:hover": { backgroundColor: "primary.light" },
          }}
        >
          manoj santra
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          Santra Developer
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={2}>
        <Grid item lg={6}>
          <Box bgcolor="primary.light" p={4}>
            Item 1
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box bgcolor="primary.light" p={4}>
            Item 2
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box bgcolor="primary.light" p={4}>
            Item 3
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box bgcolor="primary.light" p={4}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayouts;
