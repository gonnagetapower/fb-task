import React from "react";
import * as axios from "axios";
import League from "./League";
import { connect } from "react-redux";
import { setCompetition , cancelCompettition , choiseCompettition } from "../../redux/competitionsReducer";
import SearchBar from "../Search/Seach";

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
                <SearchBar/>
                <League 
                competitions={this.props.competitions} 
                value={this.props.value}
                choiseCompettition={this.props.choiseCompettition}
                cancelCompettition={this.props.cancelCompettition}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        competitions: state.competitionPage.competitions,
        value: state.searchClass.value,
        checked: state.competitionPage.checked
    }
}

export default connect(mapStateToProps, {
    setCompetition: setCompetition,
    cancelCompettition: cancelCompettition,
    choiseCompettition: choiseCompettition
})(LeagueContainer)