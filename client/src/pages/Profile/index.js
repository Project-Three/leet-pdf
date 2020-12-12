import React from "react";
// import Navbar from "../../components/Navbar";
import { Grid } from "@material-ui/core";
import Form from "./Form";
import SaveProfileBTN from "../../components/Button/SaveProfileBTN";
import Card from "@material-ui/core/Card";
import PreviewBTN from "../../components/Button/PreviewBTN";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#dee3e2",
    padding: "3rem",
},
  heading: {
    fontSize: "50px",
    fontweight: "bold",
    color: "#2e3236",
    textAlign: "center",
    paddding:"1rem",
    background: "#c0c2c4",
},
}));

const Profile = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({});
  const handleInput = (e) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Grid container className={classes.root} spacing={0} item xs={12}>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Card>
          <Form handleInput={handleInput} state={state} />
          <PreviewBTN state={state} />
          <SaveProfileBTN />
        </Card>
      </Grid>
    </div>
  );
};

export default Profile;
