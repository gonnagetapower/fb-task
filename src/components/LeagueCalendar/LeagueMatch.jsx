import React from 'react';
import styles from './LeagueMatch.module.css';

const LeagueMatch = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
            <table className={styles.tableResponsive}>
                <tr>
                    <th>Away Team</th>
                    <th>Home Team</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
                {console.log(props)}
                {props.matches.map((vvv) => {
                    return (
                        <tr key={vvv.id}>
                            <td >{vvv.awayTeam.name}</td>
                            <td >{vvv.homeTeam.name}</td>
                            <td >{vvv.status !== 'SCHEDULED' ? vvv.score.winner : vvv.status}</td>
                            <td >{vvv.season.startDate}</td>
                            <td >{vvv.season.endDate}</td>
                        </tr>
                    )
                })}
            </table>
            </div>
        </div>
    )
}

export default LeagueMatch;