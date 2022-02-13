import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import getLeague from "./../actions/leagues";
import LeagueMatch from "./LeagueMatch"

let LeagueCalendar = (props) => {

  let matches = useSelector(state => state.currentLeaguePage.matches);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeague(props.id))
  }, [])

  return (
    <div>
      <div >
        <LeagueMatch matches={matches}/>
      </div>
    </div>
  )
}

export default LeagueCalendar;



