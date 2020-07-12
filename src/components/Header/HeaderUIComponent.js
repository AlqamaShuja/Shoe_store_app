import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  home: {
    position: "absolute",
    right: 258,
  },
  contact: {
    position: "absolute",
    right: 130,
  },
  about: {
    position: "absolute",
    right: 20,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Shoe Store App
          </Typography>

          <Button
            variant="contained"
            className={classes.home}
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Home{" "}
          </Button>

          <Button
            variant="contained"
            className={classes.contact}
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            {" "}
            Contact Us{" "}
          </Button>

          <Button
            variant="contained"
            className={classes.about}
            onClick={() => {
              navigate("/about-us");
            }}
          >
            {" "}
            About Us{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
