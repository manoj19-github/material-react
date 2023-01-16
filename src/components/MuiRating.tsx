import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [ratingCount, setRatingCount] = useState<number | null>(null);
  const [favCount, setFavCount] = useState<number | null>(3.5);
  console.log("rating : ", ratingCount);
  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setFavCount(newValue);
  };
  return (
    <Stack>
      <Rating
        precision={0.5}
        value={ratingCount}
        size="large"
        onChange={(e: React.ChangeEvent<{}>, newValue: number | null) =>
          setRatingCount(newValue)
        }
      />
      <Rating
        precision={0.5}
        value={favCount}
        onChange={handleChange}
        size="large"
        readOnly
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" color="error" />}
      />
    </Stack>
  );
};

export default MuiRating;
