import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    width: 290,
    height: 320,
    // marginTop: 1,
    // marginLeft: 20,
  },
  media: {
    height: 20,
    paddingTop: "56.25%", // 16:9
  },
  fixedHeight: {
    height: 30,
    textOverflow: "hidden",
  },
  buttonFixed: {
    position: "relative",
    marginLeft: 80,
    minWidth: 105,
    // right: 4,
  },
}));

export default function ShoeCardComponent(props) {
  const classes = useStyles();
  const defaultProps = {
    bgcolor: "background.paper",
    m: 1,
    border: 2,
    maxWidth: 310,
  };
  const { name, imgURL, price } = props.shoe;
  const navigate = useNavigate();

  return (
    <div>
      <Box borderColor="#3949ab" {...defaultProps}>
        <Card className={classes.root}>
          <div onClick={() => navigate(`/${props.shoeId}`)}>
            <CardMedia className={classes.media} image={imgURL} title={name} />
            <CardContent className={classes.fixedHeight}>
              <Typography variant="body2" color="textSecondary" component="p">
                {name}
              </Typography>
            </CardContent>
          </div>
          <CardActions disableSpacing>
            <Typography> Price: ${price.toFixed(2)} </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonFixed}
              onClick={() => {
                props.addOnCart(props.shoeId);
              }}
            >
              {" "}
              Add Cart{" "}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
