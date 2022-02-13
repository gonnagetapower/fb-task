const SET_LEAGUE_MATCHES = "SET_LEAGUE_MATCHES";


let initialState = {
    matches: [],
}


const selectedLeagueReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEAGUE_MATCHES:
            {
                return {...state, matches: action.payload.matches }
            }
        default:
            return state;
    }
}

export const setLeaguesMatches = (matches) => ({ type: SET_LEAGUE_MATCHES, payload: matches });
export default selectedLeagueReducer;