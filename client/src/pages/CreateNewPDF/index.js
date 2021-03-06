import React from 'react';
import { Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar';
// import Form from '../../components/Form/Form';

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

const Create = () => {
    const classes = useStyles();

    return (
        <div>
        <Navbar />
        <Card className={classes.mainContainer}>
            <Typography varient="h3" className={classes.heading}>
                CREATE NEW PDF
            </Typography>
            {/* <Form /> */}
        </Card>
        </div>
    )
}

export default Create;
