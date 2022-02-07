const SET_MATCHES = "SET_MATCHES";


let initialState = {
    matches: [],
}


const selectedTeamReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MATCHES:
            {
                return {...state, matches: action.payload.matches }
            }
        default:
            return state;
    }
}

export const setMatches = (matches) => ({ type: SET_MATCHES, payload: matches });
export default selectedTeamReducer;