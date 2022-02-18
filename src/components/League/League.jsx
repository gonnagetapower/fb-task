import React from 'react';
import classes from './League.module.css';
import defaultBall from './../../assets/ball.png';
import arrow from './../../assets/arrow.png'
import LeagueCalendar from '../LeagueCalendar/LeagueCalendar';

const League = (props) => {
  console.log(props)
  let data = props.competitions;
  let result = props.value;
  return (
    <div className={classes.wrapper}>
      <ul className={classes.border}>
        {
          data.filter(com => {
            if (result === '') {
              return com;
            } else if (com.name.toLowerCase().includes(result.toLowerCase())) {
              return com;
            }
          }).map((com) => {
            return (
              <li key={com.id}>
                <img align="middle" className={classes.fbLogo} src={com.area.ensignUrl != null ? com.area.ensignUrl : defaultBall}></img>
                <span className={classes.name}>{com.name} <span> | Place : {com.area.name}</span>
                {com.checked ?
                  <div onClick={() => {
                    props.cancelCompettition(com.id);
                  }}>
                    <LeagueCalendar id={com.id} />
                  </div>
                  : <span onClick={() => {
                    props.choiseCompettition(com.id)
                  }}><img className={classes.arrow} src={arrow}/></span>
                }</span>
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
