import React from "react"
import "./index.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ui from "../Images/animation.svg";
import useWebAnimations, { zoomInLeft } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
function Services() {
  const classes = useStyles();
  const { ref } = useWebAnimations(zoomInLeft);


  return (
    <div className="Service-section" ref={ref}>
      <h1 className="title">Our Services</h1>
      <div className="services">
        <div className="discription">
          <h2>What we’re great at</h2>
          <p>Fourteen years and 400+ finished web projects have gifted us a unique experience on how to create something that is easy to use, looks great and earns a profit for your company.</p>
          <div className={classes.root}>
      <Button variant="contained" color="primary">
        Full Details
      </Button></div>
        </div>
        <div className="service-detail">
          <div className="service">
            <img src={ui} alt="UI Design" />
            <div>
              <h3>DESIGN AND UI/UX</h3>
              <p>Your website has three (!) seconds to make a lasting impression. We all know first impressions are the ones that count. So, if the visitor isn’t engaged by then, you’ve lost them. Straight to your competitor's site.
              <br />
              Read more
</p>
            </div>
          </div>
          <div className="service">
            <img src={ui} alt="UI Design" />
            <div>
              <h3>Animation</h3>
              <p>Your website has three (!) seconds to make a lasting impression. We all know first impressions are the ones that count. So, if the visitor isn’t engaged by then, you’ve lost them. Straight to your competitor's site.
              <br />
              Read more
</p>
            </div>
          </div>
          <div className="service">
            <img src={ui} alt="UI Design" />
            <div>
              <h3>WEB DEVELOPMENT</h3>
              <p>Your website has three (!) seconds to make a lasting impression. We all know first impressions are the ones that count. So, if the visitor isn’t engaged by then, you’ve lost them. Straight to your competitor's site.
              <br />
              Read more
</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Services;
