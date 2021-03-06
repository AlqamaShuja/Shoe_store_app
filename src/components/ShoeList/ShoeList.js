import React from "react";
import { shoe } from "../shoeData";
// import class1 from "./shoeList.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShoeCardComponent from "./ShoeCardComp/ShoeCardComponent";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

export default function ShoeList(props) {
  const classes = useStyles();

  return (
    <div style={{ marginLeft: "17px", marginTop: "60px" }}>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.container}>
          {Object.entries(shoe).map(([key, shoes]) => (
            <ShoeCardComponent
              shoeId={key}
              shoe={shoes}
              key={key}
              addOnCart={props.addOnCart}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

// {
//     display: "flex",
//     justifyContent: "space-between",
//     overflow: "auto",
//   }
