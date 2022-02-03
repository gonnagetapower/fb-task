import React from "react";
import * as axios from "axios";
import League from "./League";
import { connect } from "react-redux";
import { setCompetition } from "../../redux/competitionsReducer";

class LeagueContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://api.football-data.org/v2/competitions`, {
            headers: { 'X-Auth-Token': '7d0c5dbb6d9c414ba0c7b513d50a4ab8' },
        })
            .then(response => {
                this.props.setCompetition(response.data.competitions)
            })
    }

    render() {
        return (
            <div>
                <League competitions={this.props.competitions} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        competitions: state.competitionPage.competitions,
    }
}

export default connect(mapStateToProps, {
    setCompetition: setCompetition
})(LeagueContainer)