import React from "react";
import * as axios from "axios";
import Teams from "./Teams";
import { connect } from "react-redux";
import { setTeams } from "../../redux/teamReducer";

class TeamsContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://api.football-data.org/v2/teams/`, {
            headers: { 'X-Auth-Token': '7d0c5dbb6d9c414ba0c7b513d50a4ab8' },
        })
            .then(response => {
                this.props.setTeams(response.data.teams)
            })
    }
    render() {
        return (
            <div>
                {/* {console.log(axios.get(`http://api.football-data.org/v2/teams/${57}/matches` , {
      headers: { 'X-Auth-Token': '7d0c5dbb6d9c414ba0c7b513d50a4ab8' },
    }))} */}
                <Teams teams={this.props.teams} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        teams: state.teamsPage.teams,
    }
}

export default connect(mapStateToProps, {
    setTeams: setTeams
})(TeamsContainer)