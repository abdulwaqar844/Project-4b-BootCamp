import React from 'react';
import logo from "../Images/logo-footer.svg";
import "./index.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

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
  <li><Link to ="/">Home</Link></li>
<li><Link to ="/about">About</Link></li>
<li><Link to ="/contact">Contact Us</Link></li>
<li><Link to ="/blog">BLOG</Link></li>
<div className={classes.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button></div>

    </div>


   </ul>
</div>
  );
}
