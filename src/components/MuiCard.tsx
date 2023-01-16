import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="300px" mt={10}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="img"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            React
          </Typography>
          <Typography variant="body2" gutterBottom color="text.secondary">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            iure accusamus id dolorum reprehenderit inventore autem, reiciendis
            voluptate ratione sint quam dolorem quasi unde veniam in ipsam
            eveniet doloremque itaque!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
