import React from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getTeam from './../actions/matches';
import Match from "./Match";

let TeamCalendar = () => {
  const { id } = useParams();
  const matches = useSelector(state => state.currentTeamPage.matches);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTeam(id))
  }, [])


  return (
     <div>
       <Match matches={matches}/>
     </div>
  )
}

export default TeamCalendar;




