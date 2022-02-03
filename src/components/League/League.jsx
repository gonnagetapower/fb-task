import React from 'react';
import classes from './League.module.css';
import defaultBall from './../../assets/ball.png';

const League = (props) => {

  return (
    <div >
      <ul className={classes.border}> 
        {props.competitions.map( (com) => {
          return (
            <li key={com.id}>
              <img  align="middle" className={classes.fbLogo} src={com.area.ensignUrl !=null ? com.area.ensignUrl : defaultBall}></img>
              <span className={classes.name}>{com.name}</span>
            </li>
          )
        }
          )
        }
      </ul>
    </div>
  );
}

export default League;
