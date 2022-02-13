import React from "react";
import match from "./Match.module.css";

const Match = (props) => {
    return (
        <div>
            <div className={match.mainWrap}>
                {props.matches.map((goal) => {
                    return (
                        <div className={match.wrapper} key={goal.id}>
                            <div className={match.homeTeam}>{goal.homeTeam.name}</div>
                            <div className={match.score}>{goal.score.fullTime.homeTeam}:{goal.score.fullTime.awayTeam}</div>
                            <div className={match.awayTeam}>{goal.awayTeam.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Match;