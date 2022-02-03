import React from 'react';
import styles from './Teams.module.css';
import {  NavLink  } from 'react-router-dom';

const Teams = (props) => {
  return (
    <div >
      <div className={styles.wrapper}>
        {props.teams.map((t) => {
          return (
            <div className={styles.items} key={t.id}>
              <NavLink to={`/teams/${t.id}`}>
              <img className={styles.fblogo} src={t.crestUrl}></img>
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Teams;
