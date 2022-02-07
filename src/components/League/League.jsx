import React from 'react';
import classes from './League.module.css';
import defaultBall from './../../assets/ball.png';
import arrow from './../../assets/arrow.png'

const League = (props) => {
  console.log(props)
  let data = props.competitions;
  let result = props.value;
  return (
    <div >
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
                <span className={classes.name}>{com.name}</span>
                {com.checked ? 
                <div onClick={() => {
                  props.cancelCompettition(com.id);
                  console.log(`hui ${com.id}`);
                }}>
                  <div>{com.area.name}</div>
                  <div>{com.currentSeason.startDate} - {com.currentSeason.endDate}</div>
                </div>
                : <div onClick={() => {
                  props.choiseCompettition(com.id);
                  console.log(`pizda ${com.id}`)
                }}><img className={classes.arrow}src={arrow}/></div>
              }
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
