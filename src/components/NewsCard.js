import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LaunchIcon from "@mui/icons-material/Launch";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { pink } from "@mui/material/colors";

export const NewsCard = ({ title, date, description, url, image }) => {
  return (
    <Card sx={{ maxHeight: "40vh" }}>
      <CardMedia sx={{ height: "10vh" }} image={image} title={title} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body">{date}</Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: 2,
            gap: 2,
            alignItems: "center",
          }}
        >
          <Link href={url}>
            <LaunchIcon />
          </Link>
          <Checkbox
            inputProps={{ "aria-label": "Checkbox demo" }}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </CardActions>
      </CardContent>
    </Card>
  );
};
