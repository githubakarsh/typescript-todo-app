
import { FunctionComponent } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import  useStyles from './TopNavscss';

/**
 * 1. how to create a type of image
 * 2. 
 */
interface navbarInterface{
    navList? : any,
    appTitle : any,
    logoTitle? : string,
    isLogoutButton? : boolean  // by default boolean value is false here ....
}

const TopNavbar : 
    FunctionComponent<navbarInterface> = (props) => {
        const classes = useStyles();
        return <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.appTitle}
            </Typography>
            {props.isLogoutButton && <Button color="inherit">Login</Button>}
          </Toolbar>
        </AppBar>
      </div>
}

export default TopNavbar;


