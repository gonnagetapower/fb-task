import React from 'react';

const LeagueMatch = (props) => {
    return (
        <div>
            <div>
                {console.log(props)}
                {props.matches.map((vvv) => {
                    return (
                        <div key={vvv.id}>
                            <div>{vvv.status}</div>
                        </div >
                    )
                })}
            </div>
        </div>
    )
}

export default LeagueMatch;