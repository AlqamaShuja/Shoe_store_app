import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    marginTop: 15,
    marginLeft: 20,
  },
  media: {
    height: 20,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function ShoeCardComponent() {
  const classes = useStyles();
  const defaultProps = {
    bgcolor: "background.paper",
    m: 1,
    border: 2,
    maxWidth: 320,
  };

  return (
    <Box borderColor="#3949ab" {...defaultProps}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="http://i5.walmartimages.com/dfw/dce07b8c-86b6/k2-_398f93d0-6861-40c6-892d-3c630c5e0db5.v1.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Toms Mens Classic Burlap Slip On Casual Loafer Shoe, Black, Us 9
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
