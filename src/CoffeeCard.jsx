import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, CardMedia, IconButton } from "@mui/material";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

const CoffeeCard = (props) => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareRoundedIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <CardMedia component="img" style={{ height: "194" }} image={imageUrl} alt="Paella dish" />

      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
