import React from 'react';
import gif from "../Images/animation.gif"
import "./index.css"
import useWebAnimations, { zoomInLeft } from "@wellyshen/use-web-animations";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
export default function Main() {
    const { ref } = useWebAnimations(zoomInLeft);
    const classes = useStyles();

    return (
        <div className="main" >
            <div ref={ref} className="detail-section" >
                <h1>Your web presence just got so much better</h1>
                <h3>Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.</h3>

                <div className={classes.root}>
                    <Button variant="contained" color="primary">
                        GET IN TOUCH
                 </Button>
                    <Button variant="contained" color="primary">
                        MORE DETIALS
                      </Button>
      </div>
            </div>
            <div className="animation">
                <img src={gif} alt="Animation" />
            </div>


        </div>
    );
}
