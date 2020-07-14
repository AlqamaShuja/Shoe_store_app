import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 470,
  },
});

export default function ShoeDetailsCard(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      //   style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Card
          className={classes.root}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.name}
              height="380"
              //   width="450"
              image={props.img}
              title={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
              {/* variant="body2" color="textSecondary" component="p" */}
              <Typography variant="h4" component="h4">
                Price: ${props.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
        </Card>
      </Grid>
    </Grid>
  );
}
