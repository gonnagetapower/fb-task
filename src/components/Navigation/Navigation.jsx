import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
         <nav className={classes.nav}>
       <div className={classes.item}>
          <NavLink to="/league" activeClassName={classes.active}>League</NavLink></div>
        <div className={classes.item}>
          <NavLink to="/teams" activeClassName={classes.active}>Teams</NavLink></div>
      </nav>
    </div>
  );
}

export default Navigation;
