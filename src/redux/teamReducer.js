const SET_TEAMS = "SET_TEAMS";


let initialState = {
    teams: [],
}


const teamsReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_TEAMS: {
            return { ...state , teams : action.teams }
        }
        default:
            return state;
    }
}

export const setTeams = (teams) => ({type: SET_TEAMS, teams});
export default teamsReducer;