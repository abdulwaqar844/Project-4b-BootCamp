import React from 'react';
import logo from "../Images/logo-footer.svg";
import "./index.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
   <ul className="nav-bar">
     
<li>
  <img src={logo} alt="LOGO" />
</li>
<div className="menu">
  <li>SERVICES</li>
<li>ABOUT US</li>
<li>PROJECTS</li>
<li>BLOG</li>
<div className={classes.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button></div>

    </div>


   </ul>
</div>
  );
}
