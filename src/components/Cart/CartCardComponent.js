import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 650,
  },
  image: {
    width: 180,
    height: 180,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function CartCardComponent(props) {
  const classes = useStyles();
  const { name, img, price, id, removeFromCart } = props;

  return (
    <div className={classes.root} key={id}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={img} src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container alignItems="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Price: ${price}
                </Typography>
              </Grid>
              <Grid item>
                {/* <Typography variant="body2" style={{ cursor: "pointer" }}> */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 340,
//   },
//   name: {
//     display: "grid",
//   },
// });

// export default function CartCardComponent(props) {
//   const classes = useStyles();

//   return (
//     <Card
//       className={classes.root}
//       style={{ display: "flex", justifyContent: "center" }}
//     >
//       <CardActionArea>
//         <Grid item xs={3}>
//           <CardMedia
//             component="img"
//             alt={props.name}
//             height="260"
//             //   width="450"
//             image={props.img}
//             title={props.name}
//           />
//         </Grid>
//         <CardContent className={classes.name}>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.name}
//           </Typography>
//           {/* variant="body2" color="textSecondary" component="p" */}
//           <Typography variant="h4" component="h4">
//             Price: ${props.price}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       {/* <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions> */}
//     </Card>
//   );
// }
